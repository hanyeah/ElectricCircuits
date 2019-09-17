namespace hanyeah.elec {
  import EqBase = hanyeah.elec.base.EqBase;
  import Battery = hanyeah.elec.eqs.Battery;
  import Resistance = hanyeah.elec.eqs.Resistance;

  export class ElectricCircuits {

    public eqLayer: PIXI.Container;
    constructor(canvas: HTMLCanvasElement) {
      console.log("ElectricCircuits");

      const app: PIXI.Application = new PIXI.Application({view: canvas, transparent: true});
      console.log(app);
      console.log(app.stage);
      this.eqLayer = new PIXI.Container();
      app.stage.addChild(this.eqLayer);

      const battery: Battery = new Battery();
      this.eqLayer.addChild(battery);
      battery.x = 500;
      battery.y = 300;

      const resistance: Resistance = new Resistance();
      this.eqLayer.addChild(resistance);
      resistance.x = 200;
      resistance.y = 300;


    }
  }
}
