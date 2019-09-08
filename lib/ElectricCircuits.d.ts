declare namespace hanyeah.elec.base {
    class EqBase extends PIXI.Container {
        constructor();
        initSkin(): void;
    }
}
declare namespace hanyeah.elec.base {
    class ElecEq extends EqBase {
        U: number;
        I: number;
        R: number;
        constructor();
    }
}
declare namespace hanyeah.elec.base {
    class VoltageSource extends ElecEq {
        SU: number;
        constructor();
    }
}
declare namespace hanyeah.elec.eqs {
    import VoltageSource = hanyeah.elec.base.VoltageSource;
    class Battery extends VoltageSource {
        constructor();
        initSkin(): void;
    }
}
declare namespace hanyeah.elec.eqs {
    import ElecEq = hanyeah.elec.base.ElecEq;
    class Resistance extends ElecEq {
        constructor();
        initSkin(): void;
    }
}
declare namespace hanyeah.elec {
    class ElectricCircuits {
        eqLayer: PIXI.Container;
        constructor(canvas: HTMLCanvasElement);
    }
}
declare namespace hanyeah.elec.eqs {
    import ElecEq = hanyeah.elec.base.ElecEq;
    class SingleSwitch extends ElecEq {
        constructor();
    }
}
declare namespace hanyeah.elec.eqs {
    class Wire extends Resistance {
        constructor();
    }
}
