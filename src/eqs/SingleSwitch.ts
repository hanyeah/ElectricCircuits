namespace hanyeah.elec{
  import Graphics = PIXI.Graphics;
  export class SingleSwitch extends ElecEq implements ITwoTerminal{
    public terminal0: Terminal;
    public terminal1: Terminal;
    public knife: Graphics;
    constructor(main: ElecMain) {
      super(main);
      this.terminal0 = this.addTerminal(-50, 0);
      this.terminal1 = this.addTerminal(50, 0);
    }

    initSkin(){
      const gra: Graphics = new Graphics();
      gra.beginFill(0x000000, 1.0);
      gra.drawRect(-50, 0, 100, 20);
      gra.drawRect(-50, -20, 10, 20);
      gra.drawRect(50, -20, -10, 20);
      gra.endFill();
      this.addChild(gra);

      const knife: Graphics = new Graphics();
      knife.beginFill(0x000000, 1.0);
      knife.drawRect(-5, -10, 100, 20);
      this.addChild(knife);
      knife.x = -45;
      knife.y = -5;
      knife.rotation = -10 * Math.PI / 180;
      this.knife = knife;
    }
  }
}
