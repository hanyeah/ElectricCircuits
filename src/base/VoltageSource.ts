namespace hanyeah.elec{
  export class VoltageSource extends ElecEq{
    public SU: number = 0;
    constructor(main: ElecMain) {
      super(main);
    }
  }
}
