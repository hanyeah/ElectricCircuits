/**
 * Created by hanyeah on 2019/9/18.
 */
declare namespace hanyeah.elec {
    class Container extends PIXI.Container {
        main: ElecMain;
        constructor(main: ElecMain);
        update(dt: number): void;
        moveBy(dx: number, dy: number): void;
        moveTo(x: number, y: number): void;
        scaleBy(sx: number, sy: number): void;
        scaleTo(sx: number, sy: number): void;
    }
}
declare namespace hanyeah.elec {
    class EqBase extends Container {
        isSelect: boolean;
        constructor(main: ElecMain);
        initSkin(): void;
        initPlugin(): void;
        destroy(): void;
        update(dt: number): void;
    }
}
declare namespace hanyeah.elec {
    class ElecEq extends EqBase {
        U: number;
        I: number;
        R: number;
        constructor(main: ElecMain);
    }
}
/**
 * Created by hanyeah on 2019/9/18.
 */
declare namespace hanyeah.elec {
    class HObject {
        private static COUNTING;
        UID: number;
        constructor();
    }
}
declare namespace hanyeah.elec {
    class Resistance extends ElecEq {
        constructor(main: ElecMain);
        initSkin(): void;
    }
}
declare namespace hanyeah.elec {
    class VoltageSource extends ElecEq {
        SU: number;
        constructor(main: ElecMain);
    }
}
/**
 * Created by hanyeah on 2019/9/18.
 */
declare namespace hanyeah.elec {
    class PluginBase extends HObject {
        main: ElecMain;
        constructor(main: ElecMain);
        destroy(): void;
    }
}
declare namespace hanyeah.elec {
    class ElecMain extends HObject {
        stage: PIXI.Container;
        eqLayer: EqLayer;
        private selectPlugin;
        private dragPlugin;
        private selects;
        private ticker;
        constructor(canvas: HTMLCanvasElement);
        destroy(): void;
        update(deltaTime: any): void;
        startTicker(): void;
        stopTicker(): void;
        select(eqs: EqBase[], add: boolean): void;
        moveSelectBy(dx: number, dy: number): void;
    }
}
declare namespace hanyeah.elec {
    class SingleSwitch extends ElecEq {
        constructor(main: ElecMain);
        initSkin(): void;
    }
}
declare namespace hanyeah.elec {
    class Wire extends Resistance {
        constructor(main: ElecMain);
    }
}
/**
 * Created by hanyeah on 2019/9/18.
 */
declare namespace hanyeah.elec {
    class EqLayer extends Container {
        constructor(main: ElecMain);
    }
}
declare namespace hanyeah.elec {
    class DragPlugin extends PluginBase {
        private map;
        constructor(main: ElecMain);
        destroy(): void;
        private mouseDownHandler;
        private mouseMoveHandler;
        private mouseUpHandler;
    }
}
declare namespace hanyeah.elec {
    class Battery extends VoltageSource {
        constructor(main: ElecMain);
        initSkin(): void;
    }
}
/**
 * Created by hanyeah on 2019/9/18.
 */
declare namespace hanyeah.elec {
    class SelectPlugin extends PluginBase {
        constructor(main: ElecMain);
        destroy(): void;
        private mouseDownHandler;
        private stageClickHandler;
    }
}
