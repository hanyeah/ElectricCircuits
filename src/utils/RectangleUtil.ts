/**
 * Created by hanyeah on 2019/9/20.
 */
namespace hanyeah.elec{
  import Rectangle = PIXI.Rectangle;
  import Point = PIXI.Point;
  export class RectangleUtil{

    public static isEmpty(rect: Rectangle): boolean {
      return rect.width === 0 || rect.height === 0;
    }

    public static normalize(rect: Rectangle): void{
      if (rect.width < 0) {
        rect.x += rect.width;
        rect.width = -rect.width;
      }
      if (rect.height < 0) {
        rect.y += rect.height;
        rect.height = -rect.height;
      }
    }

    /**
     * 通过填充两个矩形之间的水平和垂直空间，将这两个矩形组合在一起以创建一个新的 Rectangle 对象。
     * @param toUnion  Rectangle
     * @returns {Rectangle}
     */
    public static union(rect0: Rectangle, rect1: Rectangle): Rectangle {
      const leftX: number = Math.min(rect0.x, rect1.x);
      const leftY: number = Math.min(rect0.y, rect1.y);
      const newW: number = Math.max(rect0.x + rect0.width, rect1.x + rect1.width) - leftX;
      const newH: number = Math.max(rect0.y + rect0.height, rect1.y + rect1.height) - leftY;
      return new Rectangle(leftX, leftY, newW, newH);

      // const x0: number = rect0.x + rect0.width;
      // const x1: number = rect1.x + rect1.width;
      // const y0: number = rect0.y + rect0.height;
      // const y1: number = rect1.y + rect1.height;
      // const maxX: number = Math.max(rect0.x, rect1.x, x0, x1);
      // const minX: number = Math.min(rect0.x, rect1.x, x0, x1);
      // const maxY: number = Math.max(rect0.y, rect1.y, y0, y1);
      // const minY: number = Math.min(rect0.y, rect1.y, y0, y1);
      // return new Rectangle(minX, minY, maxX - minX, maxY - minY);
    }

    /**
     * 按指定量增加 Rectangle 对象的大小（以像素为单位）。
     * @param dx
     * @param dy
     */
    public static inflate(rect0: Rectangle, dx: number, dy: number) {
      rect0.x -= dx;
      rect0.width += 2 * dx;
      rect0.y -= dy;
      rect0.height += 2 * dy;
    }

    public static containsPoint(rect: Rectangle, point: Point): boolean {
      return rect.contains(point.x, point.y);
    }

    /**
     * 确定在 toIntersect 参数中指定的对象是否与此 Rectangle 对象相交。
     * 此方法检查指定的 Rectangle 对象的 x、y、width 和 height 属性，以查看它是否与此 Rectangle 对象相交。
     * @param toIntersect Rectangle
     * @param notEdge 设置只挨着边的不算相交(默认算相交)
     * @returns {boolean}
     */
    public static intersects(rect0: Rectangle, rect1: Rectangle, notEdge: boolean): boolean {
      if (notEdge) {
        return !(rect1.left >= rect0.right ||
        rect1.right <= rect0.left ||
        rect1.top >= rect0.bottom ||
        rect1.bottom <= rect0.top);
      } else {
        return !(rect1.left > rect0.right ||
        rect1.right < rect0.left ||
        rect1.top > rect0.bottom ||
        rect1.bottom < rect0.top);
      }
    }

    /**
     * 如果在 toIntersect 参数中指定的 Rectangle 对象与此 Rectangle 对象相交，
     * 则返回交集区域作为 Rectangle 对象。
     * 如果矩形不相交，则此方法返回一个空的 Rectangle 对象，其属性设置为 0。
     * @param toIntersect  Rectangle
     * @param notEdge 设置只挨着边的不算相交(默认算相交)
     * @returns {Rectangle}
     */
    public static intersection(rect0: Rectangle, rect1: Rectangle, notEdge: boolean): Rectangle {
      const rect: Rectangle = new Rectangle();
      if (RectangleUtil.intersects(rect0, rect1, notEdge)) {
        if (rect1.left <= rect0.right) {
          rect.x = rect1.left;
          rect.width = rect0.right - rect.x;
        } else {
          rect.x = rect0.left;
          rect.width = rect1.right - rect.x;
        }
        rect.y = (rect1.top < rect0.top) ? rect0.top : rect1.top;
        rect.height = (rect1.bottom < rect0.bottom) ? rect1.bottom : rect0.bottom;
        rect.height = rect.height - rect.y;
      }
      return rect;
    }
  }
}
