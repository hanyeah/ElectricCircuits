/**
 * Created by hanyeah on 2019/9/22.
 */
namespace hanyeah.elec{
  export class HitArea implements PIXI.IHitArea{
    public r: number = 10;
    public x: number;
    public y: number;
    constructor(con: PIXI.Container, x: number, y: number) {
      const gra: PIXI.Graphics = new PIXI.Graphics();
      gra.beginFill(0xff0000, 0.3);
      gra.drawCircle(x, y, this.r);
      gra.endFill();
      con.addChild(gra);
      this.x = x;
      this.y = y;
    }

    public contains(x: number, y: number): boolean{
      const dx: number = x - this.x;
      const dy: number = y - this.y;
      return dx * dx + dy * dy < this.r * this.r;
    }
  }
}
