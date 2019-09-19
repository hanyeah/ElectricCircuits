/**
 * Created by hanyeah on 2019/9/18.
 */
namespace hanyeah.elec {
  import Point = PIXI.Point;
  import InteractionEvent = PIXI.interaction.InteractionEvent;

  export class ZoomPlugin extends PluginBase {
    private map: object = {};
    private mouseP: Point = new Point();

    constructor(main: ElecMain) {
      super(main);
      this.main.canvas.addEventListener("mousewheel", this.mouseWheelHandler);
      this.main.stage.addListener("pointermove", this.mouseMoveHandler);
    }

    destroy() {
      super.destroy();
    }

    private mouseMoveHandler = (e: InteractionEvent) => {
      this.mouseP = e.data.global.clone();
    };

    private mouseWheelHandler = (e: MouseWheelEvent) => {
      const delta = e.wheelDelta ? (e.wheelDelta / 120) : (-e.detail / 3);
      const p: Point = this.main.viewStack.toLocal(this.mouseP);
      const s: number = Math.min(Math.max(1 + delta * 0.1, 0.1), 2);
      this.main.scaleBy(s, p);
    };

  }
}
