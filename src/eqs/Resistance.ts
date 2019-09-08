namespace hanyeah.elec.eqs {
  import ElecEq = hanyeah.elec.base.ElecEq;

  export class Resistance extends ElecEq {
    constructor() {
      super();
    }

    initSkin() {
      const gra: PIXI.Graphics = new PIXI.Graphics();
      gra.beginFill(0x000000, 1.0);
      gra.drawRect(-30, -10, 60, 20);
      gra.drawRect(-50, -3, 20, 6);
      gra.drawRect(30, -3, 20, 6);
      gra.endFill();
      this.addChild(gra);
    }

  }
}
