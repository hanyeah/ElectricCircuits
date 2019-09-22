namespace hanyeah.elec {
  export class ElecEq extends EqBase {
    public U: number = 0;
    public I: number = 0;
    public R: number = 0;
    public isBreak: boolean = false;

    constructor(main: ElecMain) {
      super(main);
    }

    public addTerminal(x: number, y: number) {
      const terminal: Terminal = new Terminal(this.main);
      terminal.eq = this;
      terminal.x = x;
      terminal.y = y;
      this.addChild(terminal);
      return terminal;
    }

  }
}
