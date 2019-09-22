/**
 * Created by hanyeah on 2019/9/21.
 */
namespace hanyeah.elec {
  export class TwoTerminalEq extends ElecEq {
    public terminal0: Terminal;
    public terminal1: Terminal;
    constructor(main: ElecMain) {
      super(main);
      this.terminal0 = this.addTerminal(-50, 0);
      this.terminal1 = this.addTerminal(50, 0);
    }

    public destroy() {
      this.terminal0.destroy();
      this.terminal1.destroy();
      this.terminal0 = null;
      this.terminal1 = null;
      super.destroy();
    }

    public getData(): any{
      const obj: any = super.getData();
      obj.terminal0 = this.terminal0.getData();
      obj.terminal1 = this.terminal1.getData();
      return obj;
    }

    public setData(obj: any){
      super.setData(obj);
      this.terminal0.setData(obj.terminal0);

    }

  }
}
