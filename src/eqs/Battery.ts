namespace hanyeah.elec {
  /**
   * 电池。
   */
  export class Battery extends TwoTerminalEq{
    public SU: number = 1.5;
    constructor(main: ElecMain) {
      super(main);
      this.className = "Battery";
      this.edge.SU = this.SU;
    }

    public initSkin() {
      const gra: PIXI.Graphics = new PIXI.Graphics();
      gra.beginFill(0x000000, 1.0);
      gra.drawRect(-50, -20, 100, 40);
      gra.drawRect(50, -5, 4, 10);
      gra.endFill();
      this.addChild(gra);
    }
  }
}
