namespace hanyeah.elec{
  export class ElecEq extends EqBase{
    public U: number = 0;
    public I: number = 0;
    public R: number = 0;
    constructor(main: ElecMain){
      super(main);
    }
  }
}
