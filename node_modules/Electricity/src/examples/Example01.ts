/**
 * Created by hanyeah on 2019/8/30.
 */
namespace hanyeah.electricity.examples {
  import Edge = hanyeah.electricity.elecData.Edge;

  export class Example01 {
    constructor() {
      const world: World = new World();
      const arr: Edge[] = [];
      for (let i: number = 0; i < 4; i++) {
        const edge: Edge = new Edge(world, null, null);
        edge.R = 2;
        arr.push(edge);
      }
      arr[0].vertex0.connect(arr[1].vertex0);
      arr[0].vertex1.connect(arr[1].vertex1);

      arr[0].vertex0.connect(arr[2].vertex1);
      arr[0].vertex1.connect(arr[3].vertex0);

      arr[3].vertex1.connect(arr[2].vertex0);
      arr[3].SU = 6;
      arr[3].R = 0;

      test1();

      function test1() {
        console.time("用时");
        world.calculate();
        console.timeEnd("用时");
        traceUI();
      }

      // test2();
      // function test2() {
      //   console.time("用时");
      //   for (let i = 0; i < 100000; i++) {
      //     world.calculate();
      //   }
      //   console.timeEnd("用时");
      // }
      function traceUI() {
        for (let i = 0; i < arr.length; i++) {
          console.log([i + ":",
            arr[i].U.toPrecision(2),
            arr[i].I.toPrecision(2),
            arr[i].vertex0.U.toPrecision(2),
            arr[i].vertex1.U.toPrecision(2)
          ].join("\t"));
        }
      }
    }
  }
}
