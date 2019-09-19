namespace hanyeah.elec {
  export class EqBase extends Container {
    private static COUNTING: number = 0;
    public UID: number = EqBase.COUNTING++;
    public isSelect: boolean = false;

    constructor(main: ElecMain) {
      super(main);
      this.initSkin();
      this.initPlugin();
      this.interactive = true;
    }

    initSkin() {
    }

    initPlugin() {

    }

    destroy() {
      super.destroy();
    }

    update(dt: number) {
      if (this.isSelect) {
        this.alpha = 0.8;
      } else {
        this.alpha = 1.0;
      }
    }

  }
}
