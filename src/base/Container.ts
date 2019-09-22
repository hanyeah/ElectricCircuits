/**
 * Created by hanyeah on 2019/9/18.
 */
namespace hanyeah.elec{
  export class Container extends PIXI.Container{
    public UID: number = MathUtil.getUID();
    public main: ElecMain;
    constructor(main: ElecMain) {
      super();
      this.main = main;
    }

    public update(dt: number) {

    }

    public moveBy(dx: number, dy: number) {
      this.x += dx;
      this.y += dy;
    }

    public moveTo(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    public scaleBy(sx: number, sy: number) {
      this.scale.x *= sx;
      this.scale.y *= sy;
    }

    public scaleTo(sx: number, sy: number) {
      this.scale.x = sx;
      this.scale.y = sy;
    }

    public getData(): any{
      return {
        UID: this.UID
      };
    }

    public setData(obj: any){
      this.UID = obj.UID;
    }

  }
}
