/**
 * Created by hanyeah on 2019/9/22.
 */
namespace hanyeah.elec{
  export class MathUtil {
    private static COUNTING: number = 0;

    public static getUID(): number{
      return MathUtil.COUNTING++;
    }
  }
}
