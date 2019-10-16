/**
 * Created by hanyeah on 2019/8/30.
 */
namespace hanyeah.electricity {
  import Vertex = hanyeah.electricity.elecData.Vertex;
  import Edge = hanyeah.electricity.elecData.Edge;
  import List = hanyeah.dataStruct.List;
  export class World extends HObject {

    public calculater: Calculater = new Calculater();
    public dirty: boolean = true;
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
      this.dirty = true;
    }

    public removeVertex(vertex: Vertex): void {
      this.vertexList.remove(vertex.worldLN);
      this.dirty = true;
    }

    public addEdge(edge: Edge): void {
      this.edgeList.add(edge.worldLN);
      this.dirty = true;
    }

    public removeEdge(edge: Edge): void {
      this.edgeList.remove(edge.worldLN);
      this.dirty = true;
    }

    public getVertexs(): Vertex[] {
      return this.vertexList.getAllUserData() as Vertex[];
    }

    public getEdges(): Edge[] {
      return this.edgeList.getAllUserData() as Edge[];
    }

    calculate(): void{
      if (this.dirty){
        this.calculater.calculate(this.getEdges(), this.getVertexs());
        this.dirty = false;
      }
    }

  }
}
