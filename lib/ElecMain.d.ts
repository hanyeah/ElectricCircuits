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
        private static COUNTING;
        UID: number;
        isSelect: boolean;
        constructor(main: ElecMain);
        initSkin(): void;
        initPlugin(): void;
        destroy(): void;
        update(dt: number): void;
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
    class ElecEq extends EqBase {
        U: number;
        I: number;
        R: number;
        constructor(main: ElecMain);
    }
}
declare namespace hanyeah.elec {
    class VoltageSource extends ElecEq {
        SU: number;
        constructor(main: ElecMain);
    }
}
declare namespace hanyeah.elec {
    class Resistance extends ElecEq {
        constructor(main: ElecMain);
        initSkin(): void;
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
/**
 * Created by hanyeah on 2019/9/19.
 */
declare namespace hanyeah.elec {
    class RedoUndo {
        className: string;
        protected main: ElecMain;
        constructor(main: ElecMain);
        destroy(): void;
        redo(): void;
        undo(): void;
        getData(): any;
    }
}
declare namespace hanyeah.elec {
    import Point = PIXI.Point;
    import Rectangle = PIXI.Rectangle;
    class ElecMain extends HObject {
        app: PIXI.Application;
        canvas: HTMLCanvasElement;
        stage: PIXI.Container;
        bg: PIXI.Graphics;
        viewStack: ViewStack;
        private selectPlugin;
        private dragPlugin;
        private roamPlugin;
        private zoomPlugin;
        private selects;
        private ticker;
        constructor(canvas: HTMLCanvasElement);
        destroy(): void;
        update(deltaTime: any): void;
        resized(): void;
        startTicker(): void;
        stopTicker(): void;
        select(eqs: EqBase[], add: boolean): void;
        addEq(className: string, p: Point): EqBase;
        removeEq(UID: number): EqBase;
        moveSelectBy(dx: number, dy: number): void;
        moveStageBy(dx: number, dy: number): void;
        scaleBy(s: number, p: Point): void;
        selectByRect(rect: Rectangle): void;
    }
}
declare namespace hanyeah.elec {
    class Battery extends VoltageSource {
        constructor(main: ElecMain);
        initSkin(): void;
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
 * Created by hanyeah on 2019/9/19.
 */
declare namespace hanyeah.elec {
    class HEvent extends HObject {
        static DRAG_START: string;
        static DRAG_MOVE: string;
        constructor();
    }
}
/**
 * Created by hanyeah on 2019/9/18.
 */
declare namespace hanyeah.elec {
    class EqLayer extends Container {
        constructor(main: ElecMain);
        /**
         * 根据UID获取器材。
         * @param UID
         * @returns {any}
         */
        getEqByUID(UID: number): EqBase;
    }
}
/**
 * Created by hanyeah on 2019/9/18.
 */
declare namespace hanyeah.elec {
    class ViewStack extends Container {
        eqLayer: EqLayer;
        assistLayer: Container;
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
/**
 * Created by hanyeah on 2019/9/18.
 */
declare namespace hanyeah.elec {
    class RoamPlugin extends PluginBase {
        private map;
        constructor(main: ElecMain);
        destroy(): void;
        private mouseDownHandler;
        private mouseMoveHandler;
        private mouseUpHandler;
    }
}
/**
 * Created by hanyeah on 2019/9/18.
 */
declare namespace hanyeah.elec {
    class SelectPlugin extends PluginBase {
        private map;
        constructor(main: ElecMain);
        destroy(): void;
        private stageClickHandler;
        private rightDownHandler;
        private rightUpHandler;
        private mouseMoveHandler;
    }
}
/**
 * Created by hanyeah on 2019/9/18.
 */
declare namespace hanyeah.elec {
    class ZoomPlugin extends PluginBase {
        private map;
        private mouseP;
        constructor(main: ElecMain);
        destroy(): void;
        private mouseMoveHandler;
        private mouseWheelHandler;
    }
}
/**
 * Created by hanyeah on 2019/9/19.
 */
declare namespace hanyeah.elec {
    import Point = PIXI.Point;
    class CommandAddEq extends RedoUndo {
        className: string;
        private eqClassName;
        private p;
        private eqUID;
        constructor(main: ElecMain, eqClassName: string, p: Point, UID: number);
        destroy(): void;
        redo(): void;
        undo(): void;
        getData(): any;
    }
}
/**
 * Created by hanyeah on 2019/9/19.
 */
declare namespace hanyeah.elec {
    class RedoUndoManager {
        private undoStack;
        private redoStack;
        private maxStep;
        constructor(maxStep: number);
        addUndo(command: RedoUndo): void;
        undo(): void;
        redo(): void;
        canUndo(): boolean;
        canRedo(): boolean;
        readonly currentUndoStep: number;
        readonly currentRedoStep: number;
    }
}
