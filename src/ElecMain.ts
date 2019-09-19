namespace hanyeah.elec {

  import Point = PIXI.Point;
  export class ElecMain extends HObject {

    public app: PIXI.Application;
    public canvas: HTMLCanvasElement;
    public stage: PIXI.Container;
    public bg: PIXI.Graphics;
    public viewStack: ViewStack;
    private selectPlugin: SelectPlugin;
    private dragPlugin: DragPlugin;
    private roamPlugin: RoamPlugin;
    private zoomPlugin: ZoomPlugin;
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
      this.selectPlugin = new SelectPlugin(this);
      this.dragPlugin = new DragPlugin(this);
      this.roamPlugin = new RoamPlugin(this);
      this.zoomPlugin = new ZoomPlugin(this);

      this.resized();

      this.addEq("Battery", new Point(500, 300));
      this.addEq("Resistance", new Point(200, 300));
    }

    destroy() {
      this.selectPlugin.destroy();
      this.dragPlugin.destroy();
      this.roamPlugin.destroy();
      this.zoomPlugin.destroy();
      this.stopTicker();
      this.ticker = null;
    }

    update(deltaTime) {
      let eq: EqBase;
      for (let i: number = 0; i < this.viewStack.eqLayer.children.length; i++) {
        eq = this.viewStack.eqLayer.children[i] as EqBase;
        eq.update(this.ticker.deltaMS);
      }
    }

    resized() {

    }

    startTicker() {
      if (!this.ticker.started) {
        this.ticker.start();
      }
    }

    stopTicker() {
      if (this.ticker.started) {
        this.ticker.stop();
      }
    }

    select(eqs: EqBase[], add: boolean) {
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

    addEq(className: string, p: Point): EqBase {
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

    removeEq(UID: number): EqBase{
      const eq: EqBase = this.viewStack.eqLayer.getEqByUID(UID);
      if (eq) {
        this.viewStack.eqLayer.removeChild(eq);
      }
      return eq;
    }

    moveSelectBy(dx: number, dy: number) {
      for (let i: number = 0; i < this.selects.length; i++) {
        this.selects[i].moveBy(dx, dy);
      }
    }

    moveStageBy(dx: number, dy: number) {
      this.viewStack.x += dx;
      this.viewStack.y += dy;
    }

    scaleBy(s: number, p: PIXI.Point) {
      const s0: number = this.viewStack.scale.x;
      const s1: number = s0 * s;
      this.viewStack.scale.x = s1;
      this.viewStack.scale.y = s1;
      this.viewStack.x += p.x * (1 - s) * s0;
      this.viewStack.y += p.y * (1 - s) * s0;
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
