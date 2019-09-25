/**
 * Created by hanyeah on 2019/8/30.
 */
namespace hanyeah.dataStruct {
  export class UnionFindSet {

    public get root(): UnionFindSet {
      return this.getRoot();
    }

    public set root(_root: UnionFindSet) {
      this._root = _root;
    }

    public userData: object;

    public index: number = -1;

    private _root: UnionFindSet;

    constructor(userData) {
      this._root = this;
      this.userData = userData;
    }

    public destroy() {
      this._root = null;
      this.userData = null;
    }

    public isRoot(): boolean {
      return this._root === this;
    }

    private getRoot(): UnionFindSet {
      if (this._root._root !== this._root) {
        let root: UnionFindSet = this._root._root;
        while (root !== root._root) {
          root = root._root;
        }
        let son: UnionFindSet = this._root;
        let temp: UnionFindSet;
        while (son !== root) {
          temp = son._root;
          son._root = root;
          son = temp;
        }
        this._root = root;
      }
      return this._root;
    }
  }
}
