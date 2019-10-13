/**
 * Created by hanyeah on 2019/10/11.
 */
namespace hanyeah.elec{
  import World = hanyeah.electricity.World;
  import Edge = hanyeah.electricity.elecData.Edge;
  import Vertex = hanyeah.electricity.elecData.Vertex;

  /**
   * 星形连接。
   *           vertex2
   *             ○
   *             ▉
   *             ▉edge2
   *     edge0   ▉   edge1
   * ○▇▇▇▇▇○▇▇▇▇▇○
   * vertex0   vertex3     vertex1
   */
  export class StarConn{
    public edge0: Edge;
    public edge1: Edge;
    public edge2: Edge;
    public vertex0: Vertex;
    public vertex1: Vertex;
    public vertex2: Vertex;
    public vertex3: Vertex;
    constructor(world: World) {
      this.vertex0 = new Vertex(world);
      this.vertex1 = new Vertex(world);
      this.vertex2 = new Vertex(world);
      this.vertex3 = new Vertex(world);
      this.edge0 = new Edge(world, this.vertex0, this.vertex3);
      this.edge1 = new Edge(world, this.vertex1, this.vertex3);
      this.edge2 = new Edge(world, this.vertex2, this.vertex3);
    }
  }
}
