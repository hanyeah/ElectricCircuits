/**
 * Created by hanyeah on 2019/9/26.
 */
namespace hanyeah.elec{
  import Point = PIXI.Point;
  export class DirectRouter extends RouterBase{

    constructor(vertexs: Point[]) {
      super(vertexs);
    }

    public addVertex(vertex: Point) {
      if (this.vertexs.length === 0) {
        this.vertexs[0] = vertex;
      } else {
        this.vertexs[1] = vertex;
      }
    }
  }
}
