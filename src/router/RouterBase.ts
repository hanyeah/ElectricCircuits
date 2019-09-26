/**
 * Created by hanyeah on 2019/9/26.
 */
namespace hanyeah.elec{
  import Point = PIXI.Point;
  export class RouterBase{
    public vertexs: Point[];
    constructor(vertexs: Point[]) {
      this.vertexs = vertexs;
    }

    public addVertex(vertex: Point) {

    }
  }
}
