/**
 * Created by hanyeah on 2019/10/7.
 */
namespace hanyeah.elec{
  import Graphics = PIXI.Graphics;
  import Edge = hanyeah.electricity.elecData.Edge;
  import Vertex = hanyeah.electricity.elecData.Vertex;
  import Point = PIXI.Point;
  import InteractionEvent = PIXI.interaction.InteractionEvent;

  export class DoubleSwitch extends ElecEq{
    public terminal0: Terminal;
    public terminal1: Terminal;
    public terminal2: Terminal;
    public edge0: Edge;
    public edge1: Edge;
    public knife: Graphics;
    constructor(main: ElecMain){
      super(main);
      this.className = "DoubleSwitch";
      this.terminal0 = this.addTerminal(-50, 0);
      this.terminal1 = this.addTerminal(0, 0);
      this.terminal2 = this.addTerminal(50, 0);
      this.terminal0.vertex = new Vertex(this.main.world);
      this.terminal1.vertex = new Vertex(this.main.world);
      this.terminal2.vertex = new Vertex(this.main.world);
      this.edge0 = new Edge(this.main.world, this.terminal0.vertex, this.terminal1.vertex);
      this.edge1 = new Edge(this.main.world, this.terminal1.vertex, this.terminal2.vertex);
    }

    public init() {
      super.init();
      this.knife.addListener("pointertap", this.toggleOpen, this);
      this.knife.rotation = MathUtil.ang2rad(-30);
    }

    public initSkin(){
      const gra: Graphics = new Graphics();
      gra.beginFill(0x000000, 1.0);
      gra.drawRect(-50, 0, 100, 20);
      gra.drawRect(-45, -20, 10, 20);
      gra.drawRect(45, -20, -10, 20);
      gra.drawRect(-5, -20, 10, 20);
      gra.endFill();
      this.addChild(gra);

      const knife: Graphics = new Graphics();
      knife.beginFill(0x000000, 1.0);
      knife.drawRect(-5, -5, 60, 10);
      this.addChild(knife);
      knife.x = 0;
      knife.y = -15;
      knife.rotation = MathUtil.ang2rad(-30);
      this.knife = knife;
      this.knife.interactive = true;
    }

    public update(dt: number) {
      super.update(dt);
      this.edge0.isBreak = this.knife.rotation < -Math.PI + 0.1;
      this.edge1.isBreak = this.knife.rotation > -0.1;
    }

    public toggleOpen(e: InteractionEvent){

    }

  }
}
