namespace hanyeah.elec {
  import Point = PIXI.Point;
  import Graphics = PIXI.Graphics;
  import Texture = PIXI.Texture;
  import SimpleRope = PIXI.SimpleRope;

  export class Wire extends Resistance {
    public vertexs: Point[] = [];
    private skin: SimpleRope;
    constructor(main: ElecMain) {
      super(main);
      this.className = "Wire";
      this.vertexs.push(new Point(-50, 0), new Point(50, 0));
    }

    update(dt: number) {
      super.update(dt);
      this.terminal0.update();
      this.terminal1.update();
      this.vertexs[0].x = this.terminal0.x;
      this.vertexs[0].y = this.terminal0.y;
      const n: number = this.vertexs.length - 1;
      this.vertexs[n].x = this.terminal1.x;
      this.vertexs[n].y = this.terminal1.y;
      this.updateSkin();
    }

    initSkin() {
      const gra: Graphics = new Graphics();
      gra.lineStyle(6, 0x000000);
      gra.moveTo(0, 0);
      gra.lineTo(50, 0);
      gra.lineStyle(1, 0xff0000);
      gra.beginFill(0xff0000, 1.0);
      gra.drawCircle(50, 0, 6);
      gra.endFill();
      const texture: Texture = this.main.renderer.generateTexture(gra);
      this.skin = new SimpleRope(texture, this.vertexs);
      this.addChild(this.skin);
    }

    updateSkin() {
      //
    }

    moveBy(dx: number, dy: number) {
      super.moveBy(dx, dy);
    }

  }
}
