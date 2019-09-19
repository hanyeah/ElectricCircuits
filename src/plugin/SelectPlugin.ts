/**
 * Created by hanyeah on 2019/9/18.
 */
namespace hanyeah.elec {
  import InteractionEvent = PIXI.interaction.InteractionEvent;

  export class SelectPlugin extends PluginBase {

    constructor(main: ElecMain) {
      super(main);
      this.main.stage.addListener("pointertap", this.stageClickHandler);
      this.main.stage.addListener("rightdown", this.rightDownHandler, this);
      this.main.stage.addListener("rightup", this.rightUpHandler, this);
      this.main.stage.addListener("rightupoutside", this.rightUpHandler, this);
      this.main.stage.addListener("pointermove", this.mouseMoveHandler);
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

    private rightDownHandler(e: InteractionEvent){
      console.log("right down:", e);
    }

    private rightUpHandler(e: InteractionEvent) {
      console.log("right up:", e);
    }

    private mouseMoveHandler(e: InteractionEvent) {
      console.log("mouse move:", e);
    }

  }
}