/**
 * Created by hanyeah on 2019/9/20.
 */
namespace hanyeah.elec{
  import Point = PIXI.Point;
  export class Terminal extends Container{
    public UID: number = MathUtil.getUID();
    public leader: Terminal;
    public eq: EqBase;
    constructor(main: ElecMain) {
      super(main);
      this.interactive = true;
      this.hitArea = new TerminalHItArea();

      const gra: PIXI.Graphics = new PIXI.Graphics();
      this.addChild(gra);
      gra.beginFill(0xff0000, 0.2);
      gra.drawCircle(0, 0, 5);
      gra.endFill();
    }

    public destroy() {
      this.leader = null;
      super.destroy();
    }

    public update() {
      if (this.leader && this.parent) {
        this.setPosition(this.parent.toLocal(new Point(), this.leader));
      }
    }

    public setPosition(p: Point) {
      this.setPosition2(p.x, p.y);
    }

    public setPosition2(x: number, y: number){
      this.x = x;
      this.y = y;
    }

    public getData(): any {
      const obj: any = {};
      obj.UID = this.UID;
      if (this.leader) {
        obj.leader = this.leader.UID;
      }
      return obj;
    }

    public setData(obj: any) {
      this.UID = obj.UID;
      if (obj.leader) {
        // this.main
      }
    }

  }

  class TerminalHItArea implements PIXI.IHitArea{
    public r: number = 10;
    constructor(){

    }

    public contains(x: number, y: number): boolean{
      return x * x + y * y < this.r * this.r;
    }
  }
}
