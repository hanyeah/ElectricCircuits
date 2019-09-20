/**
 * Created by hanyeah on 2019/9/18.
 */
namespace hanyeah.elec{
  import Point = PIXI.Point;
  import InteractionEvent = PIXI.interaction.InteractionEvent;
  export class PluginBase extends HObject{
    public main: ElecMain;
    public mouseP: Point = new Point();
    constructor(main: ElecMain) {
      super();
      this.main = main;
    }

    public destroy() {
      this.main = null;
      this.mouseP = null;
    }

    /**
     * 鼠标左键按下
     * @param e
     */
    public onMouseDown(e: InteractionEvent) {
    }

    /**
     * 鼠标移动
     * @param e
     */
    public onMouseMove(e: InteractionEvent) {
    }

    /**
     * 鼠标左键弹起
     * @param e
     */
    public onMouseUp(e: InteractionEvent) {
    }

    /**
     * 鼠标左键单击
     * @param e
     */
    public onClick(e: InteractionEvent) {
    }

    /**
     * 鼠标滚轮滚动
     * @param e
     */
    public onMouseWheel(e: MouseWheelEvent) {
    }

    /**
     * 鼠标右键按下
     * @param e
     */
    public onRightDown(e: InteractionEvent) {
    }

    /**
     * 鼠标右键弹起
     * @param e
     */
    public onRightUp(e: InteractionEvent) {
    }

    /**
     * 鼠标右键单击
     * @param e
     */
    public onRightClick(e: InteractionEvent) {
    }

    public global2view(p: Point): Point {
      return this.main.viewStack.toLocal(p);
    }

  }
}
