namespace hanyeah.elec {
  export class Battery extends VoltageSource {

    constructor(main: ElecMain) {
      super(main);
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
