/**
 * Created by hanyeah on 2019/9/18.
 */
declare namespace hanyeah.elec {
    class Container extends PIXI.Container {
        UID: number;
        className: string;
        main: ElecMain;
        constructor(main: ElecMain);
        update(dt: number): void;
        moveBy(dx: number, dy: number): void;
        moveTo(x: number, y: number): void;
        scaleBy(sx: number, sy: number): void;
        scaleTo(sx: number, sy: number): void;
        getData(): any;
        setData(obj: any): void;
    }
}
declare namespace hanyeah.elec {
    class EqBase extends Container {
        isSelect: boolean;
        constructor(main: ElecMain);
        destroy(): void;
        initSkin(): void;
        initPlugin(): void;
        update(dt: number): void;
        getData(): any;
        setData(obj: any): void;
    }
}
declare namespace hanyeah.elec {
    class ElecEq extends EqBase {
        U: number;
        I: number;
        R: number;
        isBreak: boolean;
        constructor(main: ElecMain);
        addTerminal(x: number, y: number): Terminal;
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
/**
 * Created by hanyeah on 2019/9/21.
 */
declare namespace hanyeah.elec {
    import Edge = hanyeah.electricity.elecData.Edge;
    class TwoTerminalEq extends ElecEq {
        terminal0: Terminal;
        terminal1: Terminal;
        edge: Edge;
        constructor(main: ElecMain);
        destroy(): void;
        update(dt: number): void;
        getData(): any;
        setData(obj: any): void;
    }
}
declare namespace hanyeah.elec {
    class Resistance extends TwoTerminalEq {
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
        protected map: object;
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
declare namespace hanyeah.elec {
    import Point = PIXI.Point;
    import Rectangle = PIXI.Rectangle;
    import World = hanyeah.electricity.World;
    class ElecMain extends HObject {
        world: World;
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
        removeEq(eq: EqBase): void;
        getEq(UID: number): EqBase;
        moveSelectBy(dx: number, dy: number): void;
        moveStageBy(dx: number, dy: number): void;
        scaleBy(s: number, p: Point): void;
        selectByRect(rect: Rectangle): void;
        selectAll(): void;
        deleteSelects(): void;
        deleteAll(): void;
        forEachEq(callBack: Function, inverted?: boolean): void;
        getData(): any;
        setData(obj: any): void;
        getScale(): number;
        global2view(p: Point): Point;
        getFriend(eq: TwoTerminalEq): TwoTerminalEq[];
        private getRootVertex;
    }
}
/**
 * Created by hanyeah on 2019/9/22.
 */
declare namespace hanyeah.elec {
    class HitArea implements PIXI.IHitArea {
        r: number;
        x: number;
        y: number;
        constructor(con: PIXI.Container, x: number, y: number);
        contains(x: number, y: number): boolean;
    }
}
/**
 * Created by hanyeah on 2019/9/20.
 */
declare namespace hanyeah.elec {
    import Point = PIXI.Point;
    import Vertex = hanyeah.electricity.elecData.Vertex;
    class Terminal extends Container {
        UID: number;
        leader: Terminal;
        eq: EqBase;
        vertex: Vertex;
        private _leader;
        constructor(main: ElecMain);
        destroy(): void;
        update(): void;
        setPosition(p: Point): void;
        setPosition2(x: number, y: number): void;
        getData(): any;
        setData(obj: any): void;
        private connect;
        private disConnect;
    }
}
declare namespace hanyeah.elec {
    class Battery extends TwoTerminalEq {
        SU: number;
        constructor(main: ElecMain);
        initSkin(): void;
    }
}
/**
 * Created by hanyeah on 2019/9/22.
 */
declare namespace hanyeah.elec {
    class Bulb extends Resistance {
        private light;
        constructor(main: ElecMain);
        initSkin(): void;
        update(dt: number): void;
    }
}
declare namespace hanyeah.elec {
    import Graphics = PIXI.Graphics;
    import InteractionEvent = PIXI.interaction.InteractionEvent;
    class SingleSwitch extends TwoTerminalEq {
        knife: Graphics;
        constructor(main: ElecMain);
        initSkin(): void;
        update(dt: number): void;
        toggleOpen(e: InteractionEvent): void;
    }
}
declare namespace hanyeah.elec {
    import Point = PIXI.Point;
    class Wire extends Resistance {
        vertexs: Point[];
        private skin;
        constructor(main: ElecMain);
        update(dt: number): void;
        initSkin(): void;
        updateSkin(): void;
        moveBy(dx: number, dy: number): void;
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
    import InteractionEvent = PIXI.interaction.InteractionEvent;
    class DragPlugin extends PluginBase {
        constructor(main: ElecMain);
        destroy(): void;
        onMouseDown(e: InteractionEvent): void;
        onMouseMove(e: InteractionEvent): void;
        onMouseUp(e: InteractionEvent): void;
    }
}
/**
 * Created by hanyeah on 2019/9/20.
 */
declare namespace hanyeah.elec {
    import InteractionEvent = PIXI.interaction.InteractionEvent;
    class DrawWirePlugin extends PluginBase {
        constructor(main: ElecMain);
        destroy(): void;
        onMouseDown(e: InteractionEvent): void;
        onMouseMove(e: InteractionEvent): void;
        onMouseUp(e: InteractionEvent): void;
        private isLegalTerminal;
    }
}
/**
 * Created by hanyeah on 2019/9/20.
 */
declare namespace hanyeah.elec {
    class HotkeyPlugin extends PluginBase {
        constructor(main: ElecMain);
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
/**
 * Created by hanyeah on 2019/9/22.
 */
declare namespace hanyeah.elec {
    class ArrayUtil {
        static remove<T>(arr: T[], item: T): void;
    }
}
/**
 * Created by hanyeah on 2019/9/22.
 */
declare namespace hanyeah.elec {
    class MathUtil {
        private static COUNTING;
        static getUID(): number;
    }
}
/**
 * Created by hanyeah on 2019/9/20.
 */
declare namespace hanyeah.elec {
    import Rectangle = PIXI.Rectangle;
    import Point = PIXI.Point;
    class RectangleUtil {
        static isEmpty(rect: Rectangle): boolean;
        static normalize(rect: Rectangle): void;
        /**
         * 通过填充两个矩形之间的水平和垂直空间，将这两个矩形组合在一起以创建一个新的 Rectangle 对象。
         * @param toUnion  Rectangle
         * @returns {Rectangle}
         */
        static union(rect0: Rectangle, rect1: Rectangle): Rectangle;
        /**
         * 按指定量增加 Rectangle 对象的大小（以像素为单位）。
         * @param dx
         * @param dy
         */
        static inflate(rect0: Rectangle, dx: number, dy: number): void;
        static containsPoint(rect: Rectangle, point: Point): boolean;
        /**
         * 确定在 toIntersect 参数中指定的对象是否与此 Rectangle 对象相交。
         * 此方法检查指定的 Rectangle 对象的 x、y、width 和 height 属性，以查看它是否与此 Rectangle 对象相交。
         * @param toIntersect Rectangle
         * @param notEdge 设置只挨着边的不算相交(默认算相交)
         * @returns {boolean}
         */
        static intersects(rect0: Rectangle, rect1: Rectangle, notEdge: boolean): boolean;
        /**
         * 如果在 toIntersect 参数中指定的 Rectangle 对象与此 Rectangle 对象相交，
         * 则返回交集区域作为 Rectangle 对象。
         * 如果矩形不相交，则此方法返回一个空的 Rectangle 对象，其属性设置为 0。
         * @param toIntersect  Rectangle
         * @param notEdge 设置只挨着边的不算相交(默认算相交)
         * @returns {Rectangle}
         */
        static intersection(rect0: Rectangle, rect1: Rectangle, notEdge: boolean): Rectangle;
    }
}
