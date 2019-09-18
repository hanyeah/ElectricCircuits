/**
 * Created by hanyeah on 2019/9/18.
 */
namespace hanyeah.elec{
  export class Container extends PIXI.Container{
    public main: ElecMain;
    constructor(main: ElecMain) {
      super();
      this.main = main;
    }

    update(dt: number) {

    }

    moveBy(dx: number, dy: number) {
      this.x += dx;
      this.y += dy;
    }

    moveTo(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    scaleBy(sx: number, sy: number) {
      this.scale.x *= sx;
      this.scale.y *= sy;
    }

    scaleTo(sx: number, sy: number) {
      this.scale.x = sx;
      this.scale.y = sy;
    }

  }
}