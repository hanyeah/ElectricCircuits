namespace hanyeah.elec {

  import Point = PIXI.Point;
  import InteractionEvent = PIXI.interaction.InteractionEvent;

  export class DragPlugin extends PluginBase {

    constructor(main: ElecMain) {
      super(main);
    }

    destroy() {
      super.destroy();
    }

    public onMouseDown(e: InteractionEvent) {
      super.onMouseDown(e);
      if (e.target instanceof EqBase) {
        this.map[e.data.identifier] = new DragItem(e.target as EqBase, e.data.identifier, this.global2view(e.data.global));
      }
    }

    public onMouseMove(e: InteractionEvent) {
      super.onMouseMove(e);
      const dragItem: DragItem = this.map[e.data.identifier] as DragItem;
      if (dragItem) {
        if (!dragItem.eq.isSelect) {
          this.main.select([dragItem.eq], e.data.originalEvent.ctrlKey);
        }
        const p: Point = this.global2view(e.data.global);
        this.main.moveSelectBy(p.x - dragItem.p.x, p.y - dragItem.p.y);
        dragItem.p = p;
        dragItem.moved = true;
      }
    }

    public onMouseUp(e: InteractionEvent) {
      super.onMouseUp(e);
      if (this.map[e.data.identifier]) {
        const dragItem: DragItem = this.map[e.data.identifier] as DragItem;
        if (dragItem.moved) {
          e.stopPropagation();
        }
        delete this.map[e.data.identifier];
      }
    }

  }

  class DragItem {
    public eq: EqBase;
    public id: number;
    public p: Point;
    public moved: boolean = false;

    constructor(eq: EqBase, id: number, p: Point) {
      this.eq = eq;
      this.id = id;
      this.p = p;
    }
  }
}
