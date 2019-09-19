/**
 * Created by hanyeah on 2019/9/18.
 */
namespace hanyeah.elec{
  export class EqLayer extends Container{
    constructor(main: ElecMain){
      super(main);
      this.interactive = true;
    }

    /**
     * 根据UID获取器材。
     * @param UID
     * @returns {any}
     */
    getEqByUID(UID: number): EqBase{
      let eq: EqBase;
      for (let i: number = 0; i < this.children.length; i++) {
        eq = this.children[i] as EqBase;
        if (eq.UID === UID) {
          return eq;
        }
      }
      return null;
    }
  }
}