/**
 * Created by hanyeah on 2019/8/30.
 */
namespace hanyeah.electricity {
  import Vertex = hanyeah.electricity.elecData.Vertex;
  import Edge = hanyeah.electricity.elecData.Edge;
  import List = hanyeah.dataStruct.List;
  export class World extends HObject {

    public calculater: Calculater = new Calculater();
    private vertexList: List = new List();
    private edgeList: List = new List();

    constructor() {
      super();
    }

    public destroy(): void {
      this.vertexList.destroy();
      this.vertexList = null;
      this.edgeList.destroy();
      this.edgeList = null;
      this.calculater = null;
    }

    public addVertex(vertex: Vertex): void {
      this.vertexList.add(vertex.worldLN);
    }

    public removeVertex(vertex: Vertex): void {
      this.vertexList.remove(vertex.worldLN);
    }

    public addEdge(edge: Edge): void {
      this.edgeList.add(edge.worldLN);
    }

    public removeEdge(edge: Edge): void {
      this.edgeList.remove(edge.worldLN);
    }

    public getVertexs(): Vertex[] {
      return this.vertexList.getAllUserData() as Vertex[];
    }

    public getEdges(): Edge[] {
      return this.edgeList.getAllUserData() as Edge[];
    }

    calculate(): void{
      this.calculater.calculate(this.getEdges(), this.getVertexs());
    }

  }
}
