/**
 * Created by hanyeah on 2019/9/20.
 */
namespace hanyeah.elec {
  import Point = PIXI.Point;
  import InteractionEvent = PIXI.interaction.InteractionEvent;
  export class DrawWirePlugin extends PluginBase {
    constructor(main: ElecMain) {
      super(main);
    }

    public destroy() {
      super.destroy();
    }

    public onMouseDown(e: InteractionEvent) {
      super.onMouseDown(e);
      if (e.target instanceof Terminal) {
        const p: Point = this.global2view(e.data.global);
        const wire: Wire = this.main.addEq("Wire", new Point()) as Wire;
        this.map[e.data.identifier] = wire;
        wire.vertexs[0] = p;
        wire.vertexs[1] = p.clone();
        wire.interactive = false;
      }
    }

    public onMouseMove(e: InteractionEvent) {
      super.onMouseMove(e);
      if (this.map[e.data.identifier]) {
        const wire: Wire = this.map[e.data.identifier];
        const p: Point = this.global2view(e.data.global);
        wire.vertexs[1] = p;
      }
    }

    public onMouseUp(e: InteractionEvent) {
      super.onMouseUp(e);
      if (this.map[e.data.identifier]) {
        const wire: Wire = this.map[e.data.identifier];
        const p: Point = this.global2view(e.data.global);
        if (e.target instanceof Terminal) {
          wire.interactive = true;
        } else {
          this.main.removeEq(wire);
        }
      }
    }

  }
}
