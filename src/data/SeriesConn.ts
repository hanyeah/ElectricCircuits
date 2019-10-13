/**
 * Created by hanyeah on 2019/10/11.
 */
namespace hanyeah.elec {
  import World = hanyeah.electricity.World;
  import Edge = hanyeah.electricity.elecData.Edge;
  import Vertex = hanyeah.electricity.elecData.Vertex;
  /**
   * 两个边串联。
   * vertex0   vertex1     vertex2
   * ○▇▇▇▇▇○▇▇▇▇▇○
   *    edge0        edge1
   */
  export class SeriesConn {
    public edge0: Edge;
    public edge1: Edge;
    public vertex0: Vertex;
    public vertex1: Vertex;
    public vertex2: Vertex;

    constructor(world: World) {
      this.vertex0 = new Vertex(world);
      this.vertex1 = new Vertex(world);
      this.vertex2 = new Vertex(world);
      this.edge0 = new Edge(world, this.vertex0, this.vertex1);
      this.edge1 = new Edge(world, this.vertex1, this.vertex2);
    }
  }
}
