/**
 * Created by hanyeah on 2019/9/18.
 */
namespace hanyeah.elec {
  import Point = PIXI.Point;
  import InteractionEvent = PIXI.interaction.InteractionEvent;

  export class ZoomPlugin extends PluginBase {
    private map: object = {};

    constructor(main: ElecMain) {
      super(main);
    }

    destroy() {
      super.destroy();
    }

  }
}
