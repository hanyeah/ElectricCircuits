/**
 * Created by hanyeah on 2019/8/30.
 */
namespace hanyeah.electricity.elecData {
  import ListNode = hanyeah.dataStruct.ListNode;
  export class Edge extends HObject {
    public SI: number = 0;
    public SU: number = 0;
    public R: number = 0;
    public U: number = 0;
    public I: number = 0;
    public isBreak: boolean = false;
    public vertex0: Vertex;
    public vertex1: Vertex;
    public worldLN: ListNode;
    public world: World;
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
  }
}
