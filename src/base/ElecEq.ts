namespace hanyeah.elec {
  import Edge = hanyeah.electricity.elecData.Edge;
  import Vertex = hanyeah.electricity.elecData.Vertex;

  export class ElecEq extends EqBase {
    public U: number = 0;
    public I: number = 0;
    public R: number = 0;
    public isBreak: boolean = false;

    constructor(main: ElecMain) {
      super(main);
    }

    public addTerminal(x: number, y: number, vertex: Vertex) {
      const terminal: Terminal = new Terminal(this.main, vertex);
      terminal.eq = this;
      terminal.x = x;
      terminal.y = y;
      this.addChild(terminal);
      return terminal;
    }

  }
}
