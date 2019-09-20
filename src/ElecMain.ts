namespace hanyeah.elec {

  import Point = PIXI.Point;
  import Rectangle = PIXI.Rectangle;
  export class ElecMain extends HObject {

    public app: PIXI.Application;
    public canvas: HTMLCanvasElement;
    public stage: PIXI.Container;
    public bg: PIXI.Graphics;
    public viewStack: ViewStack;
    public pluginManager: PluginManager;
    private selects: EqBase[] = [];
    private ticker: PIXI.ticker.Ticker;


    constructor(canvas: HTMLCanvasElement) {
      super();
      (window as any).main = this;
      // init app
      this.canvas = canvas;
      this.app = new PIXI.Application({view: canvas, transparent: true});
      this.stage = this.app.stage;
      this.stage.interactive = true;
      this.stage.hitArea = new StageHitArea();
      // init viewStack
      this.viewStack = new ViewStack(this);
      this.stage.addChild(this.viewStack);
      // init ticker
      this.ticker = this.app.ticker;
      this.startTicker();
      this.ticker.add(this.update, this);
      // init plugin
      this.pluginManager = new PluginManager(this);
      this.pluginManager.registerPlugin(new DragPlugin(this));
      this.pluginManager.registerPlugin(new SelectPlugin(this));
      this.pluginManager.registerPlugin(new RoamPlugin(this));
      this.pluginManager.registerPlugin(new ZoomPlugin(this));
      this.pluginManager.registerPlugin(new HotkeyPlugin(this));
      this.pluginManager.registerPlugin(new DrawWirePlugin(this));

      this.resized();

      this.addEq("Battery", new Point(500, 300));
      this.addEq("Resistance", new Point(200, 300));
      this.addEq("SingleSwitch", new Point(200, 400));
      this.addEq("Wire", new Point(500, 400));
    }

    public destroy() {
      this.pluginManager.destroy();
      this.stopTicker();
      this.ticker = null;
    }

    public update(deltaTime) {
      let eq: EqBase;
      for (let i: number = 0; i < this.viewStack.eqLayer.children.length; i++) {
        eq = this.viewStack.eqLayer.children[i] as EqBase;
        eq.update(this.ticker.deltaMS);
      }
    }

    public resized() {

    }

    public startTicker() {
      if (!this.ticker.started) {
        this.ticker.start();
      }
    }

    public stopTicker() {
      if (this.ticker.started) {
        this.ticker.stop();
      }
    }

    public select(eqs: EqBase[], add: boolean) {
      for (let i: number = 0; i < this.selects.length; i++) {
        this.selects[i].isSelect = false;
      }
      if (!add) {
        this.selects.length = 0;
      }
      for (let i: number = 0; i < eqs.length; i++) {
        const eq: EqBase = eqs[i];
        const ind = this.selects.indexOf(eq);
        if (ind === -1) {
          this.selects.push(eq);
        } else {
          this.selects.splice(ind, 1);
        }
      }
      for (let i: number = 0; i < this.selects.length; i++) {
        this.selects[i].isSelect = true;
      }
    }

    public addEq(className: string, p: Point): EqBase {
      const clazz: any = hanyeah.elec[className];
      if (clazz) {
        const eq: EqBase =  new clazz(this) as EqBase;
        eq.x = p.x;
        eq.y = p.y;
        this.viewStack.eqLayer.addChild(eq);
        return eq;
      }
      return null;
    }

    public removeEq(eq: EqBase): void{
      this.viewStack.eqLayer.removeChild(eq);
      eq.destroy();
    }

    public getEq(UID: number): EqBase{
      return this.viewStack.eqLayer.getEqByUID(UID);
    }

    public moveSelectBy(dx: number, dy: number) {
      for (let i: number = 0; i < this.selects.length; i++) {
        this.selects[i].moveBy(dx, dy);
      }
    }

    public moveStageBy(dx: number, dy: number) {
      this.viewStack.x += dx;
      this.viewStack.y += dy;
    }

    public scaleBy(s: number, p: Point) {
      const s0: number = this.viewStack.scale.x;
      const s1: number = s0 * s;
      this.viewStack.scale.x = s1;
      this.viewStack.scale.y = s1;
      this.viewStack.x += p.x * (1 - s) * s0;
      this.viewStack.y += p.y * (1 - s) * s0;
    }

    public selectByRect(rect: Rectangle){
      const sc: number = this.getScale();
      const rect0: Rectangle = new Rectangle();
      const rect1: Rectangle = new Rectangle(rect.x * sc + this.viewStack.x, rect.y * sc + this.viewStack.y, rect.width * sc, rect.height * sc);
      const arr: EqBase[] = [];
      this.forEachEq((eq: EqBase) => {
        if (RectangleUtil.intersects(rect1, eq.getBounds(true, rect0), false)) {
          arr.push(eq);
        }
      });
      this.select(arr, false);
    }

    public selectAll() {
      const arr: EqBase[] = [];
      this.forEachEq((eq: EqBase) => {
        arr.push(eq);
      });
      this.select(arr, false);
    }

    public forEachEq(callBack) {
      for (let i: number = 0; i < this.viewStack.eqLayer.children.length; i++) {
        callBack(this.viewStack.eqLayer.children[i] as EqBase);
      }
    }

    public getScale(): number {
      return this.viewStack.scale.x;
    }

    public global2view(p: Point): Point {
      return this.viewStack.toLocal(p);
    }

  }

  /**
   * stage的hitArea，永远返回true，实现舞台任意位置点击都有事件。
   */
  class StageHitArea implements PIXI.IHitArea {
    constructor() {
      //
    }

    contains(x: number, y: number): boolean {
      return true;
    }
  }
}
