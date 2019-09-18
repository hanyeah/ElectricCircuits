/**
 * Created by hanyeah on 2019/9/18.
 */
namespace hanyeah.elec{
  export class ViewStack extends Container{
    public eqLayer: EqLayer;
    constructor(main: ElecMain){
      super(main);
      this.interactive = true;
      this.eqLayer = new EqLayer(this.main);
      this.addChild(this.eqLayer);
    }
  }
}
