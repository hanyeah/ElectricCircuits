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
        wire.terminal0.setPosition(p);
        wire.terminal1.setPosition(p);
        wire.interactive = false;
        wire.terminal0.leader = e.target as Terminal;
        wire.terminal0.interactive = false;
        wire.terminal1.interactive = false;
      }
    }

    public onMouseMove(e: InteractionEvent) {
      super.onMouseMove(e);
      if (this.map[e.data.identifier]) {
        const wire: Wire = this.map[e.data.identifier];
        const p: Point = this.global2view(e.data.global);
        wire.terminal1.setPosition(p);
      }
    }

    public onMouseUp(e: InteractionEvent) {
      super.onMouseUp(e);
      if (this.map[e.data.identifier]) {
        const wire: Wire = this.map[e.data.identifier];
        const p: Point = this.global2view(e.data.global);
        if (e.target instanceof Terminal && this.isLegalTerminal(wire, e.target as Terminal)) {
          wire.interactive = true;
          wire.terminal1.leader = e.target as Terminal;
          wire.terminal0.interactive = true;
          wire.terminal1.interactive = true;
        } else {
          this.main.removeEq(wire);
        }
        delete this.map[e.data.identifier];
      }
    }

    private isLegalTerminal(wire: Wire, terminal: Terminal): boolean{
      if (terminal.leader) {
        terminal = terminal.leader;
      }
      return terminal !== wire.terminal0.leader && !(terminal.eq instanceof Wire);
    }

  }
}
