/**
 * Created by hanyeah on 2019/9/20.
 */
namespace hanyeah.elec{
  export class Terminal extends PIXI.DisplayObject{
    constructor() {
      super();
      this.interactive = true;
      this.hitArea = new TerminalHItArea();
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
