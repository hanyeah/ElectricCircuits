/**
 * Created by hanyeah on 2019/9/18.
 */
namespace hanyeah.elec{
  export class HObject{
    private static COUNTING: number = 0;
    // private static TIME: number = new Date().getTime();
    public UID: number = HObject.COUNTING++;
    constructor() {

    }
  }
}