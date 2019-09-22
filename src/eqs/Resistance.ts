namespace hanyeah.elec {
  export class Resistance extends TwoTerminalEq{
    constructor(main: ElecMain) {
      super(main);
      this.className = "Resistance";
      this.R = 1.0;
      this.edge.R = this.R;
    }

    public initSkin() {
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
