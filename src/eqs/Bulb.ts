/**
 * Created by hanyeah on 2019/9/22.
 */
namespace hanyeah.elec {
  import Graphics = PIXI.Graphics;

  export class Bulb extends Resistance {
    private light: Graphics;
    constructor(main: ElecMain) {
      super(main);
    }

    public initSkin() {
      const light: Graphics = new Graphics();
      light.beginFill(0xffff00, 1.0);
      light.drawCircle(0, 0, 30);
      light.endFill();
      this.light = light;
      this.addChild(light);

      const gra: Graphics = new Graphics();
      gra.lineStyle(6, 0x000000, 1.0);
      gra.drawCircle(0, 0, 30);
      gra.moveTo(21, 21);
      gra.lineTo(-21, -21);
      gra.moveTo(-21, 21);
      gra.lineTo(21, -21);
      gra.moveTo(-50, 0);
      gra.lineTo(-30, 0);
      gra.moveTo(50, 0);
      gra.lineTo(30, 0);
      this.addChild(gra);
    }

    public update(dt: number) {
      super.update(dt);
      this.light.alpha = this.I === 0.0 ? 0 : 1.0;
    }

  }
}
