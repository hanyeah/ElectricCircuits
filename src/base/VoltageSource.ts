namespace hanyeah.elec{
  export class VoltageSource extends TwoTerminalEq{
    public SU: number = 0;
    constructor(main: ElecMain) {
      super(main);
    }
  }
}
