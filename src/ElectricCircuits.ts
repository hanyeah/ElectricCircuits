namespace hanyeah.elec {

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
      console.log("ElecMain");
      console.log(this);

      this.canvas = canvas;
      this.app = new PIXI.Application({view: canvas, transparent: true});
      this.stage = this.app.stage;
      this.stage.interactive = true;
      this.stage.hitArea = new StageHitArea();

      this.viewStack = new ViewStack(this);
      this.stage.addChild(this.viewStack);

      const battery: Battery = new Battery(this);
      this.viewStack.eqLayer.addChild(battery);
      battery.x = 500;
      battery.y = 300;

      const resistance: Resistance = new Resistance(this);
      this.viewStack.eqLayer.addChild(resistance);
      resistance.x = 200;
      resistance.y = 300;

      console.log(battery);
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

  class StageHitArea implements PIXI.IHitArea {
    constructor() {
      //
    }

    contains(x: number, y: number): boolean {
      return true;
    }
  }
}
