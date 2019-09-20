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
    }

    destroy() {
      this.map = null;
      super.destroy();
    }

    public onMouseDown(e: InteractionEvent) {
      super.onMouseDown(e);
      if (e.target === this.main.stage) {
        this.map[e.data.identifier] = e.data.global.clone();
      }
    }

    public onMouseMove(e: InteractionEvent) {
      super.onMouseMove(e);
      const lp: Point = this.map[e.data.identifier] as Point;
      if (lp) {
        const p: Point = e.data.global;
        this.main.moveStageBy(p.x - lp.x, p.y - lp.y);
        lp.x = p.x;
        lp.y = p.y;
      }
    }

    public onMouseUp(e: InteractionEvent) {
      super.onMouseUp(e);
      if (this.map[e.data.identifier]) {
        delete this.map[e.data.identifier];
      }
    }

  }
}
