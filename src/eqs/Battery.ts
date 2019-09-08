namespace hanyeah.elec.eqs {
  import VoltageSource = hanyeah.elec.base.VoltageSource;
  export class Battery extends VoltageSource {

    constructor() {
      super();
    }

    initSkin() {
      const gra: PIXI.Graphics = new PIXI.Graphics();
      gra.beginFill(0x000000, 1.0);
      gra.drawRect(-50, -20, 100, 40);
      gra.drawRect(50, -5, 4, 10);
      gra.endFill();
      this.addChild(gra);
    }
  }
}
