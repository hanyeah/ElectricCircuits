/**
 * Created by hanyeah on 2019/9/18.
 */
namespace hanyeah.elec {
  import Point = PIXI.Point;
  import InteractionEvent = PIXI.interaction.InteractionEvent;

  export class RoamPlugin extends PluginBase {
    private map: object = {};

    constructor(main: ElecMain) {
      super(main);
      this.main.stage.addListener("pointerdown", this.mouseDownHandler);
      this.main.stage.addListener("pointermove", this.mouseMoveHandler);
      this.main.stage.addListener("pointerup", this.mouseUpHandler);
      this.main.stage.addListener("pointerupoutside", this.mouseUpHandler);
    }

    destroy() {
      this.main.stage.removeListener("pointerdown", this.mouseDownHandler);
      this.main.stage.removeListener("pointermove", this.mouseMoveHandler);
      this.main.stage.removeListener("pointerup", this.mouseUpHandler);
      this.main.stage.removeListener("pointerupoutside", this.mouseUpHandler);
      super.destroy();
    }

    private mouseDownHandler = (e: InteractionEvent) => {
      if (e.data.button === 0 && e.target === this.main.stage) {
        this.map[e.data.identifier] = e.data.global.clone();
      }
    };

    private mouseMoveHandler = (e: InteractionEvent) => {
      const lp: Point = this.map[e.data.identifier] as Point;
      if (lp) {
        const p: Point = e.data.global;
        this.main.moveStageBy(p.x - lp.x, p.y - lp.y);
        lp.x = p.x;
        lp.y = p.y;
      }
    };

    private mouseUpHandler = (e: InteractionEvent) => {
      if (this.map[e.data.identifier]) {
        delete this.map[e.data.identifier];
      }
    };

  }
}
