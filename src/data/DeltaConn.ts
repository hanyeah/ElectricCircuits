/**
 * Created by hanyeah on 2019/10/13.
 */
namespace hanyeah.elec{
  import World = hanyeah.electricity.World;
  import Edge = hanyeah.electricity.elecData.Edge;
  import Vertex = hanyeah.electricity.elecData.Vertex;
  /**
   * △连接。
   *              vertex0
   *                 ○
   *               ◆  ◆
   *        edge2◆      ◆edge0
   *           ◆          ◆
   * vertex2 ○▇▇▇▇▇▇▇○vertex1
   *                edge1
   */
  export class DeltaConn{
    public edge0: Edge;
    public edge1: Edge;
    public edge2: Edge;
    public vertex0: Vertex;
    public vertex1: Vertex;
    public vertex2: Vertex;
    constructor(world: World){
      this.vertex0 = new Vertex(world);
      this.vertex1 = new Vertex(world);
      this.vertex2 = new Vertex(world);
      this.edge0 = new Edge(world, this.vertex0, this.vertex1);
      this.edge1 = new Edge(world, this.vertex1, this.vertex2);
      this.edge2 = new Edge(world, this.vertex2, this.vertex0);
    }
  }
}
