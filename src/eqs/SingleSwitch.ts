namespace hanyeah.elec{
  import Graphics = PIXI.Graphics;
  export class SingleSwitch extends TwoTerminalEq{
    public knife: Graphics;
    constructor(main: ElecMain) {
      super(main);
    }

    initSkin(){
      const gra: Graphics = new Graphics();
      gra.beginFill(0x000000, 1.0);
      gra.drawRect(-50, 0, 100, 20);
      gra.drawRect(-45, -20, 10, 20);
      gra.drawRect(45, -20, -10, 20);
      gra.endFill();
      this.addChild(gra);

      const knife: Graphics = new Graphics();
      knife.beginFill(0x000000, 1.0);
      knife.drawRect(-5, -5, 120, 10);
      this.addChild(knife);
      knife.x = -40;
      knife.y = -15;
      knife.rotation = -10 * Math.PI / 180;
      this.knife = knife;
    }
  }
}
