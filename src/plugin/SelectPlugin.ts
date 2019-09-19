/**
 * Created by hanyeah on 2019/9/18.
 */

namespace hanyeah.elec {
  import InteractionEvent = PIXI.interaction.InteractionEvent;
  import Point = PIXI.Point;
  import Rectangle = PIXI.Rectangle;

  export class SelectPlugin extends PluginBase {

    private map: object = {};
    constructor(main: ElecMain) {
      super(main);
      this.main.stage.addListener("pointertap", this.stageClickHandler);
      this.main.stage.addListener("rightdown", this.rightDownHandler, this);
      this.main.stage.addListener("rightup", this.rightUpHandler, this);
      this.main.stage.addListener("rightupoutside", this.rightUpHandler, this);
      this.main.stage.addListener("pointermove", this.mouseMoveHandler, this);
    }

    destroy() {
      this.main.stage.removeListener("pointertap", this.stageClickHandler);
      this.main.stage.removeListener("rightdown", this.rightDownHandler, this);
      this.main.stage.removeListener("rightup", this.rightUpHandler, this);
      this.main.stage.removeListener("rightupoutside", this.rightUpHandler, this);
      this.main.stage.removeListener("pointermove", this.mouseMoveHandler, this);
      this.map = null;
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
      if (e.target === this.main.stage) {
        const p: Point = this.main.viewStack.toLocal(e.data.global);
        const item: DragSelectItem =  new DragSelectItem(p, p.clone());
        this.map[e.data.identifier] = item;
        this.main.viewStack.assistLayer.addChild(item.gra);
      }
    }

    private rightUpHandler(e: InteractionEvent) {
      if(this.map[e.data.identifier]) {
        const item: DragSelectItem = this.map[e.data.identifier] as DragSelectItem;
        this.main.viewStack.assistLayer.removeChild(item.gra);
        delete this.map[e.data.identifier];
        e.stopPropagation();
      }
    }

    private mouseMoveHandler(e: InteractionEvent) {
      if(this.map[e.data.identifier]) {
        const item: DragSelectItem = this.map[e.data.identifier] as DragSelectItem;
        item.p1 = this.main.viewStack.toLocal(e.data.global);
        item.update();
        this.main.selectByRect(item.rect);
      }
    }

  }

  class DragSelectItem{
    public p0: Point;
    public p1: Point;
    public rect: Rectangle;
    public gra: PIXI.Graphics;
    constructor(p0: Point, p1: Point){
      this.p0 = p0;
      this.p1 = p1;
      this.gra = new PIXI.Graphics();
      this.rect = new Rectangle();
    }

    update(){
      this.rect.x = Math.min(this.p0.x, this.p1.x);
      this.rect.y = Math.min(this.p0.y, this.p1.y);
      this.rect.width = Math.abs(this.p0.x - this.p1.x);
      this.rect.height = Math.abs(this.p0.y - this.p1.y);

      this.gra.clear();
      this.gra.lineStyle(1, 0x000000, 1.0);
      this.gra.beginFill(0x000000, 0.3);
      this.gra.drawRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
      this.gra.endFill();
    }

  }
}
