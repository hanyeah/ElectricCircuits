/**
 * Created by hanyeah on 2019/8/30.
 */
namespace hanyeah.electricity.elecData {
  import ListNode = hanyeah.dataStruct.ListNode;

  export class Edge extends HObject {
    public vertex0: Vertex;
    public vertex1: Vertex;
    public worldLN: ListNode;
    public world: World;
    private _SI: number = 0;
    private _SU: number = 0;
    private _R: number = 0;
    private _U: number = 0;
    private _I: number = 0;
    private _L: number = 0;
    private _C: number = 0;
    private _isBreak: boolean = false;

    constructor(world: World, vertex0: Vertex, vertex1: Vertex) {
      super();
      this.worldLN = new ListNode(this);
      this.world = world;
      world.addEdge(this);
      this.vertex0 = vertex0 || new Vertex(world);
      this.vertex1 = vertex1 || new Vertex(world);
    }

    destroy() {
      this.world.removeEdge(this);
      this.world = null;
      this.worldLN.destroy();
      this.worldLN = null;
      this.vertex0 = null;
      this.vertex1 = null;
    }

    public get SU(): number {
      return this._SU;
    }

    public set SU(value: number) {
      if (this._SU !== value) {
        this._SU = value;
        this.world.dirty = true;
      }
    }

    public get SI(): number {
      return this._SI;
    }

    public set SI(value: number) {
      if (this._SI !== value) {
        this._SI = value;
        this.world.dirty = true;
      }
    }

    public get U(): number {
      return this._U;
    }

    public set U(value: number) {
      if (this._U !== value) {
        this._U = value;
        this.world.dirty = true;
      }
    }

    public get I(): number {
      return this._I;
    }

    public set I(value: number) {
      if (this._I !== value) {
        this._I = value;
        this.world.dirty = true;
      }
    }

    public get R(): number {
      return this._R;
    }

    public set R(value: number) {
      if (this._R !== value) {
        this._R = value;
        this.world.dirty = true;
      }
    }

    public get L(): number {
      return this._L;
    }

    public set L(value: number) {
      if (this._L !== value) {
        this._L = value;
        this.world.dirty = true;
      }
    }

    public get C(): number {
      return this._C;
    }

    public set C(value: number) {
      if (this._C !== value) {
        this._C = value;
        this.world.dirty = true;
      }
    }

    public get isBreak(): boolean {
      return this._isBreak;
    }

    public set isBreak(value: boolean) {
      if (this._isBreak !== value) {
        this._isBreak = value;
        this.world.dirty = true;
      }
    }

  }
}
