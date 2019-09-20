/**
 * Created by hanyeah on 2019/9/18.
 */
namespace hanyeah.elec {
  import Point = PIXI.Point;
  
  export class ZoomPlugin extends PluginBase {

    constructor(main: ElecMain) {
      super(main);
    }

    destroy() {
      super.destroy();
    }

    public onMouseWheel(e: MouseWheelEvent) {
      super.onMouseWheel(e);
      const delta = e.wheelDelta ? (e.wheelDelta / 120) : (-e.detail / 3);
      const p: Point = this.global2view(this.mouseP);
      const s: number = Math.min(Math.max(1 + delta * 0.1, 0.1), 2);
      this.main.scaleBy(s, p);
    }

  }
}
