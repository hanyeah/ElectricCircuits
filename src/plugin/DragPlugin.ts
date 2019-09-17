namespace hanyeah.elec.plugin{
  import EqBase = hanyeah.elec.base.EqBase;

  export class DragPlugin{
    constructor(eq: EqBase){
      eq.addListener("pointerdown", this.mouseDownHandler);
    }

    mouseDownHandler(e) {
      console.log(e);
    }
  }
}
