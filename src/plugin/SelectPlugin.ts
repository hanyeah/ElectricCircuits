/**
 * Created by hanyeah on 2019/9/18.
 */
namespace hanyeah.elec {
  import InteractionEvent = PIXI.interaction.InteractionEvent;

  export class SelectPlugin extends PluginBase {
    constructor(main: ElecMain) {
      super(main);
      this.main.stage.addListener("pointertap", this.stageClickHandler);
    }

    destroy() {
      this.main.stage.removeListener("pointertap", this.stageClickHandler);
      super.destroy();
    }

    private stageClickHandler = (e: InteractionEvent) => {
      if (e.target instanceof EqBase) {
        this.main.select([e.target as EqBase], e.data.originalEvent.ctrlKey);
      } else {
        this.main.select([], false);
      }
    };

  }
}