/**
 * Created by hanyeah on 2019/9/22.
 */
namespace hanyeah.elec{
  export class ArrayUtil{
    public static remove<T>(arr: T[], item: T): void{
      const ind: number = arr.indexOf(item);
      if (ind !== -1) {
        arr.splice(ind, 1);
      }
    }
  }
}
