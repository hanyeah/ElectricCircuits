/**
 * Created by hanyeah on 2019/9/22.
 */
namespace hanyeah.elec{
  export class MathUtil {
    private static COUNTING: number = 0;

    public static getUID(): number{
      return MathUtil.COUNTING++;
    }

    public static ang2rad(ang: number): number {
      return ang * Math.PI / 180;
    }

    public static rad2ang(rad: number): number {
      return rad * 180 / Math.PI;
    }

  }
}
