/**
 * Created by hanyeah on 2019/9/19.
 */
namespace hanyeah.elec{
  export class RedoUndo{
    public className: string = "RedoUndo";
    protected main: ElecMain;
    constructor(main: ElecMain) {
      this.main = main;
    }

    destroy() {
      this.main = null;
    }

    redo() {

    }

    undo() {

    }

    getData(): any {
      return {
        className: this.className
      };
    }

  }

}
