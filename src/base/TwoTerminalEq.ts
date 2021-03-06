/**
 * Created by hanyeah on 2019/9/21.
 */
namespace hanyeah.elec {
  import Edge = hanyeah.electricity.elecData.Edge;

  export class TwoTerminalEq extends ElecEq {
    public terminal0: Terminal;
    public terminal1: Terminal;
    public edge: Edge;

    constructor(main: ElecMain) {
      super(main);
      this.terminal0 = this.addTerminal(-50, 0, this.edge.vertex0);
      this.terminal1 = this.addTerminal(50, 0, this.edge.vertex1);
      this.edge = new Edge(this.main.world, null, null);
    }

    public destroy() {
      this.edge.destroy();
      this.terminal0.destroy();
      this.terminal1.destroy();
      this.terminal0 = null;
      this.terminal1 = null;
      super.destroy();
    }

    public update(dt: number) {
      super.update(dt);
      this.U = this.edge.U;
      this.I = this.edge.I;
    }

    public getData(): any {
      const obj: any = super.getData();
      obj.terminal0 = this.terminal0.getData();
      obj.terminal1 = this.terminal1.getData();
      return obj;
    }

    public setData(obj: any) {
      super.setData(obj);
      this.terminal0.setData(obj.terminal0);
      this.terminal1.setData(obj.terminal1);
    }

  }
}
