/**
 * Created by hanyeah on 2019/10/7.
 */
namespace hanyeah.elec{
  import Graphics = PIXI.Graphics;
  import Edge = hanyeah.electricity.elecData.Edge;
  import Vertex = hanyeah.electricity.elecData.Vertex;
  import Point = PIXI.Point;
  import InteractionEvent = PIXI.interaction.InteractionEvent;
  export class SlideRheostat extends ElecEq{
    public terminal0: Terminal;
    public terminal1: Terminal;
    public terminal2: Terminal;
    public terminal3: Terminal;
    public edge0: Edge;
    public edge1: Edge;
    public slide: Graphics;
    constructor(main: ElecMain){
      super(main);
      this.className = "SlideRheostat";
      this.terminal0 = this.addTerminal(-50, 0);
      this.terminal1 = this.addTerminal(50, 0);
      this.terminal2 = this.addTerminal(-50, -20);
      this.terminal3 = this.addTerminal(50, -20);
      this.terminal0.vertex = new Vertex(this.main.world);
      this.terminal1.vertex = new Vertex(this.main.world);
      this.terminal2.vertex = this.terminal3.vertex = new Vertex(this.main.world);
      this.edge0 = new Edge(this.main.world, this.terminal0.vertex, this.terminal2.vertex);
      this.edge1 = new Edge(this.main.world, this.terminal1.vertex, this.terminal2.vertex);
    }

    public initSkin(){
      const gra: Graphics = new Graphics();
      gra.beginFill(0x000000, 1.0);
      gra.drawRect(-50, 0, 100, 20);
      gra.drawRect(-50, 10, -4, 10);
      gra.drawRect(50, 10, 4, 10);
      gra.drawRect(-50, -19, 100, 8);
      gra.drawRect(-50, -20, -4, 10);
      gra.drawRect(50, -20, 4, 10);
      gra.endFill();
      this.addChild(gra);

      const slide: Graphics = new Graphics();
      slide.beginFill(0x0f0000, 1.0);
      slide.drawRect(-5, -10, 20, 30);
      this.addChild(slide);
      slide.x = 0;
      slide.y = -20;
      this.slide = slide;
      this.slide.interactive = true;
    }

  }
}
