/**
 * Created by hanyeah on 2019/9/19.
 */
namespace hanyeah.elec{
  import Point = PIXI.Point;
  export class CommandAddEq extends RedoUndo{
    public className: string = "CommandAddEq";
    private eqClassName: string;
    private p: Point;
    private eqUID: number;
    constructor(main: ElecMain, eqClassName: string, p: Point, UID: number){
      super(main);
      this.eqClassName = eqClassName;
      this.p = p;
      this.eqUID = UID;
    }

    destroy() {
      this.className = null;
      this.p = null;
      super.destroy();
    }

    redo() {
      const eq: EqBase = this.main.addEq(this.eqClassName, this.p);
      eq.UID = this.eqUID;
    }

    undo() {
      this.main.removeEq(this.eqUID);
    }

    getData(): any {
      const obj: any = super.getData();
      obj.eqClassName = this.eqClassName;
      obj.p = {
        x: this.p.x,
        y: this.p.y
      };
      obj.eqUID = this.eqUID;
      return obj;
    }

  }
}
