namespace hanyeah.elec{

  import Point = PIXI.Point;
  import InteractionEvent = PIXI.interaction.InteractionEvent;
  export class DragPlugin extends PluginBase{
    private map: object = {};
    constructor(main: ElecMain){
      super(main);
      this.main.eqLayer.addListener("pointerdown", this.mouseDownHandler);
      this.main.stage.addListener("pointermove", this.mouseMoveHandler);
      this.main.stage.addListener("pointerup", this.mouseUpHandler);
      this.main.stage.addListener("pointerupoutside", this.mouseUpHandler);
    }

    destroy() {
      this.main.eqLayer.removeListener("pointerdown", this.mouseDownHandler);
      this.main.stage.removeListener("pointermove", this.mouseMoveHandler);
      this.main.stage.removeListener("pointerup", this.mouseUpHandler);
      this.main.stage.removeListener("pointerupoutside", this.mouseUpHandler);
      super.destroy();
    }

    private mouseDownHandler = (e: InteractionEvent) => {
      if(e.target instanceof EqBase) {
        console.log("down:",e.data.identifier);
        this.map[e.data.identifier] = new DragItem(e.target as EqBase, e.data.identifier, this.main.eqLayer.toLocal(e.data.global));
      }
    };

    private mouseMoveHandler = (e: InteractionEvent) => {
      console.log("move:",e.data.identifier);
      const dragItem: DragItem = this.map[e.data.identifier] as DragItem;
      if(dragItem) {
        if(!dragItem.eq.isSelect) {
          this.main.select([dragItem.eq], e.data.originalEvent.ctrlKey);
        }
        const p: Point = this.main.eqLayer.toLocal(e.data.global);
        this.main.moveSelectBy(p.x - dragItem.p.x, p.y - dragItem.p.y);
        dragItem.p = p;
      }

    };

    private mouseUpHandler = (e: InteractionEvent) => {
      if(this.map[e.data.identifier]) {
        delete this.map[e.data.identifier];
      }
    };

  }

  class DragItem{
    public eq: EqBase;
    public id: number;
    public p: Point;
    constructor(eq: EqBase, id: number, p: Point) {
      this.eq = eq;
      this.id = id;
      this.p = p;
    }
  }
}
