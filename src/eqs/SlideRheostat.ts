/**
 * Created by hanyeah on 2019/10/7.
 */
namespace hanyeah.elec{
  import Graphics = PIXI.Graphics;
  /**
   * 滑动变阻器。
   */
  export class SlideRheostat extends ElecEq{
    public terminal0: Terminal;
    public terminal1: Terminal;
    public terminal2: Terminal;
    public terminal3: Terminal;
    public slide: Graphics;
    public elecData: SeriesConn;
    constructor(main: ElecMain){
      super(main);
      this.className = "SlideRheostat";
      this.terminal0 = this.addTerminal(-50, 0, this.elecData.vertex0);
      this.terminal1 = this.addTerminal(50, 0, this.elecData.vertex2);
      this.terminal2 = this.addTerminal(-50, -20, this.elecData.vertex1);
      this.terminal3 = this.addTerminal(50, -20, this.elecData.vertex1);
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
