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
    import Point = PIXI.Point;
    import InteractionEvent = PIXI.interaction.InteractionEvent;
    class PluginBase extends HObject {
        main: ElecMain;
        mouseP: Point;
        constructor(main: ElecMain);
        destroy(): void;
        /**
         * 鼠标左键按下
         * @param e
         */
        onMouseDown(e: InteractionEvent): void;
        /**
         * 鼠标移动
         * @param e
         */
        onMouseMove(e: InteractionEvent): void;
        /**
         * 鼠标左键弹起
         * @param e
         */
        onMouseUp(e: InteractionEvent): void;
        /**
         * 鼠标左键单击
         * @param e
         */
        onClick(e: InteractionEvent): void;
        /**
         * 鼠标滚轮滚动
         * @param e
         */
        onMouseWheel(e: MouseWheelEvent): void;
        /**
         * 鼠标右键按下
         * @param e
         */
        onRightDown(e: InteractionEvent): void;
        /**
         * 鼠标右键弹起
         * @param e
         */
        onRightUp(e: InteractionEvent): void;
        /**
         * 鼠标右键单击
         * @param e
         */
        onRightClick(e: InteractionEvent): void;
        global2view(p: Point): Point;
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
    class ViewStack extends Container {
        eqLayer: EqLayer;
        assistLayer: Container;
        constructor(main: ElecMain);
    }
}
declare namespace hanyeah.elec {
    import InteractionEvent = PIXI.interaction.InteractionEvent;
    class DragPlugin extends PluginBase {
        private map;
        constructor(main: ElecMain);
        destroy(): void;
        onMouseDown(e: InteractionEvent): void;
        onMouseMove(e: InteractionEvent): void;
        onMouseUp(e: InteractionEvent): void;
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
        pluginManager: PluginManager;
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
        global2view(p: Point): Point;
    }
}
/**
 * Created by hanyeah on 2019/9/20.
 */
declare namespace hanyeah.elec {
    class PluginManager {
        private main;
        private plugins;
        constructor(main: ElecMain);
        destroy(): void;
        registerPlugin(plugin: PluginBase): void;
        unRegisterPlugin(plugin: PluginBase, destroy?: boolean): void;
        private mouseDownHandler;
        private mouseMoveHandler;
        private mouseUpHandler;
        private mouseWheelHandler;
        private clickHandler;
    }
}
/**
 * Created by hanyeah on 2019/9/18.
 */
declare namespace hanyeah.elec {
    import InteractionEvent = PIXI.interaction.InteractionEvent;
    class RoamPlugin extends PluginBase {
        private map;
        constructor(main: ElecMain);
        destroy(): void;
        onMouseDown(e: InteractionEvent): void;
        onMouseMove(e: InteractionEvent): void;
        onMouseUp(e: InteractionEvent): void;
    }
}
/**
 * Created by hanyeah on 2019/9/18.
 */
declare namespace hanyeah.elec {
    import InteractionEvent = PIXI.interaction.InteractionEvent;
    class SelectPlugin extends PluginBase {
        private map;
        constructor(main: ElecMain);
        destroy(): void;
        onClick(e: InteractionEvent): void;
        onRightDown(e: InteractionEvent): void;
        onRightUp(e: InteractionEvent): void;
        onMouseMove(e: InteractionEvent): void;
    }
}
/**
 * Created by hanyeah on 2019/9/18.
 */
declare namespace hanyeah.elec {
    class ZoomPlugin extends PluginBase {
        constructor(main: ElecMain);
        destroy(): void;
        onMouseWheel(e: MouseWheelEvent): void;
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
declare namespace hanyeah.elec {
    class SingleSwitch extends ElecEq {
        constructor(main: ElecMain);
        initSkin(): void;
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
