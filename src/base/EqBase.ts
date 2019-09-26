namespace hanyeah.elec {
  export class EqBase extends Container {
    public isSelect: boolean = false;

    constructor(main: ElecMain) {
      super(main);
      this.interactive = true;
    }

    public init() {
      this.initSkin();
      this.initPlugin();
    }

    public destroy() {
      super.destroy();
    }

    public initSkin() {
    }

    public initPlugin() {
    }

    public update(dt: number) {
      if (this.isSelect) {
        this.alpha = 0.8;
      } else {
        this.alpha = 1.0;
      }
    }

    public getData(): any{
      const obj: any = super.getData();
      return obj;
    }

    public setData(obj: any): void{
      super.setData(obj);
    }

  }
}
