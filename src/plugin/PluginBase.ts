/**
 * Created by hanyeah on 2019/9/18.
 */
namespace hanyeah.elec{
  export class PluginBase extends HObject{
    public main: ElecMain;
    constructor(main: ElecMain) {
      super();
      this.main = main;
    }

    destroy() {
      this.main = null;
    }
  }
}