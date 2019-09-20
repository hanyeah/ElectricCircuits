namespace hanyeah.elec {
  import Point = PIXI.Point;
  import Graphics = PIXI.Graphics;
  export class Wire extends Resistance {
    public vertexs: Point[] = [];
    private skin: Graphics;

    constructor(main: ElecMain) {
      super(main);
      this.vertexs.push(new Point(-50, 0), new Point(50, 0));
    }

    update(dt: number) {
      super.update(dt);
      this.updateSkin();
    }

    initSkin() {
      this.skin = new Graphics();
      this.addChild(this.skin);
    }

    updateSkin() {
      const gra: Graphics = this.skin;
      gra.clear();
      gra.lineStyle(6, 0x000000, 1.0);
      let p: Point;
      for (let i: number = 0; i < this.vertexs.length; i++) {
        p = this.vertexs[i];
        if (i === 0) {
          gra.moveTo(p.x, p.y);
        } else {
          gra.lineTo(p.x, p.y);
        }
      }
    }

    moveBy(dx: number, dy: number) {
      super.moveBy(dx, dy);
    }

  }
}
