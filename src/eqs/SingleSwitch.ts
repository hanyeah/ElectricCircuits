namespace hanyeah.elec{
  import Graphics = PIXI.Graphics;
  import Point = PIXI.Point;
  import InteractionEvent = PIXI.interaction.InteractionEvent;
  export class SingleSwitch extends TwoTerminalEq{
    public knife: Graphics;
    constructor(main: ElecMain) {
      super(main);
      this.className = "SingleSwitch";
      this.isBreak = true;
      this.edge.isBreak = this.isBreak;
    }

    public init() {
      super.init();
      this.knife.addListener("pointertap", this.toggleOpen, this);
    }

    public initSkin(){
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
      knife.rotation = MathUtil.ang2rad(-30);
      this.knife = knife;
      this.knife.interactive = true;
    }

    public update(dt: number) {
      super.update(dt);
      this.knife.rotation = this.isBreak ? -0.5 : 0;
    }

    public toggleOpen(e: InteractionEvent){
      this.isBreak = !this.isBreak;
      this.edge.isBreak = this.isBreak;
    }

  }
}
