namespace hanyeah.elec {

  export class ElecMain extends HObject{

    public stage: PIXI.Container;
    public bg: PIXI.Graphics;
    public eqLayer: EqLayer;
    private selectPlugin: SelectPlugin;
    private dragPlugin: DragPlugin;
    private selects: EqBase[] = [];
    private ticker: PIXI.ticker.Ticker;
    constructor(canvas: HTMLCanvasElement) {
      super();
      console.log("ElecMain");

      const app: PIXI.Application = new PIXI.Application({view: canvas, transparent: true});
      console.log(app);
      console.log(app.stage);
      this.stage = app.stage;
      this.stage.interactive = true;

      this.bg = new PIXI.Graphics();
      this.stage.addChild(this.bg);

      this.eqLayer = new EqLayer(this);
      app.stage.addChild(this.eqLayer);

      const battery: Battery = new Battery(this);
      this.eqLayer.addChild(battery);
      battery.x = 500;
      battery.y = 300;

      const resistance: Resistance = new Resistance(this);
      this.eqLayer.addChild(resistance);
      resistance.x = 200;
      resistance.y = 300;

      console.log(battery);
      // init ticker
      this.ticker = app.ticker;
      this.startTicker();
      this.ticker.add(this.update, this);
      // init plugin
      this.selectPlugin = new SelectPlugin(this);
      this.dragPlugin = new DragPlugin(this);

      this.resized();
    }

    destroy() {
      this.selectPlugin.destroy();
      this.dragPlugin.destroy();
      this.stopTicker();
      this.ticker = null;
    }

    update(deltaTime) {
      let eq: EqBase;
      for(let i: number = 0; i < this.eqLayer.children.length; i++) {
        eq = this.eqLayer.children[i] as EqBase;
        eq.update(this.ticker.deltaMS);
      }
    }

    resized() {
     
    }

    startTicker() {
      if(!this.ticker.started) {
        this.ticker.start();
      }
    }

    stopTicker() {
      if(this.ticker.started) {
        this.ticker.stop();
      }
    }

    select(eqs: EqBase[], add: boolean) {
      for(let i: number = 0; i < this.selects.length; i++) {
        this.selects[i].isSelect = false;
      }
      if(!add) {
        this.selects.length = 0;
      }
      for(let i: number = 0; i < eqs.length; i++) {
        const eq: EqBase = eqs[i];
        const ind = this.selects.indexOf(eq);
        if(ind === -1) {
          this.selects.push(eq);
        } else {
          this.selects.splice(ind, 1);
        }
      }
      for(let i: number = 0; i < this.selects.length; i++) {
        this.selects[i].isSelect = true;
      }
    }

    moveSelectBy(dx: number, dy: number) {
      for(let i: number = 0; i < this.selects.length; i++) {
        this.selects[i].moveBy(dx, dy);
      }
    }

  }
}
