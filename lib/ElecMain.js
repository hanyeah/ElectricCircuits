var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by hanyeah on 2019/9/18.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var Container = /** @class */ (function (_super) {
            __extends(Container, _super);
            function Container(main) {
                var _this = _super.call(this) || this;
                _this.main = main;
                return _this;
            }
            Container.prototype.update = function (dt) {
            };
            Container.prototype.moveBy = function (dx, dy) {
                this.x += dx;
                this.y += dy;
            };
            Container.prototype.moveTo = function (x, y) {
                this.x = x;
                this.y = y;
            };
            Container.prototype.scaleBy = function (sx, sy) {
                this.scale.x *= sx;
                this.scale.y *= sy;
            };
            Container.prototype.scaleTo = function (sx, sy) {
                this.scale.x = sx;
                this.scale.y = sy;
            };
            return Container;
        }(PIXI.Container));
        elec.Container = Container;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var EqBase = /** @class */ (function (_super) {
            __extends(EqBase, _super);
            function EqBase(main) {
                var _this = _super.call(this, main) || this;
                _this.UID = EqBase.COUNTING++;
                _this.isSelect = false;
                _this.initSkin();
                _this.initPlugin();
                _this.interactive = true;
                return _this;
            }
            EqBase.prototype.initSkin = function () {
            };
            EqBase.prototype.initPlugin = function () {
            };
            EqBase.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            EqBase.prototype.update = function (dt) {
                if (this.isSelect) {
                    this.alpha = 0.8;
                }
                else {
                    this.alpha = 1.0;
                }
            };
            EqBase.COUNTING = 0;
            return EqBase;
        }(elec.Container));
        elec.EqBase = EqBase;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var ElecEq = /** @class */ (function (_super) {
            __extends(ElecEq, _super);
            function ElecEq(main) {
                var _this = _super.call(this, main) || this;
                _this.U = 0;
                _this.I = 0;
                _this.R = 0;
                return _this;
            }
            return ElecEq;
        }(elec.EqBase));
        elec.ElecEq = ElecEq;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/9/18.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var HObject = /** @class */ (function () {
            function HObject() {
                // private static TIME: number = new Date().getTime();
                this.UID = HObject.COUNTING++;
            }
            HObject.COUNTING = 0;
            return HObject;
        }());
        elec.HObject = HObject;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var VoltageSource = /** @class */ (function (_super) {
            __extends(VoltageSource, _super);
            function VoltageSource(main) {
                var _this = _super.call(this, main) || this;
                _this.SU = 0;
                return _this;
            }
            return VoltageSource;
        }(elec.ElecEq));
        elec.VoltageSource = VoltageSource;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var Resistance = /** @class */ (function (_super) {
            __extends(Resistance, _super);
            function Resistance(main) {
                return _super.call(this, main) || this;
            }
            Resistance.prototype.initSkin = function () {
                var gra = new PIXI.Graphics();
                gra.beginFill(0x000000, 1.0);
                gra.drawRect(-30, -10, 60, 20);
                gra.drawRect(-50, -3, 20, 6);
                gra.drawRect(30, -3, 20, 6);
                gra.endFill();
                this.addChild(gra);
            };
            return Resistance;
        }(elec.ElecEq));
        elec.Resistance = Resistance;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/9/18.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var Point = PIXI.Point;
        var PluginBase = /** @class */ (function (_super) {
            __extends(PluginBase, _super);
            function PluginBase(main) {
                var _this = _super.call(this) || this;
                _this.mouseP = new Point();
                _this.main = main;
                return _this;
            }
            PluginBase.prototype.destroy = function () {
                this.main = null;
                this.mouseP = null;
            };
            /**
             * 鼠标左键按下
             * @param e
             */
            PluginBase.prototype.onMouseDown = function (e) {
            };
            /**
             * 鼠标移动
             * @param e
             */
            PluginBase.prototype.onMouseMove = function (e) {
            };
            /**
             * 鼠标左键弹起
             * @param e
             */
            PluginBase.prototype.onMouseUp = function (e) {
            };
            /**
             * 鼠标左键单击
             * @param e
             */
            PluginBase.prototype.onClick = function (e) {
            };
            /**
             * 鼠标滚轮滚动
             * @param e
             */
            PluginBase.prototype.onMouseWheel = function (e) {
            };
            /**
             * 鼠标右键按下
             * @param e
             */
            PluginBase.prototype.onRightDown = function (e) {
            };
            /**
             * 鼠标右键弹起
             * @param e
             */
            PluginBase.prototype.onRightUp = function (e) {
            };
            /**
             * 鼠标右键单击
             * @param e
             */
            PluginBase.prototype.onRightClick = function (e) {
            };
            PluginBase.prototype.global2view = function (p) {
                return this.main.viewStack.toLocal(p);
            };
            return PluginBase;
        }(elec.HObject));
        elec.PluginBase = PluginBase;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/9/19.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var RedoUndo = /** @class */ (function () {
            function RedoUndo(main) {
                this.className = "RedoUndo";
                this.main = main;
            }
            RedoUndo.prototype.destroy = function () {
                this.main = null;
            };
            RedoUndo.prototype.redo = function () {
            };
            RedoUndo.prototype.undo = function () {
            };
            RedoUndo.prototype.getData = function () {
                return {
                    className: this.className
                };
            };
            return RedoUndo;
        }());
        elec.RedoUndo = RedoUndo;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/9/18.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var EqLayer = /** @class */ (function (_super) {
            __extends(EqLayer, _super);
            function EqLayer(main) {
                var _this = _super.call(this, main) || this;
                _this.interactive = true;
                return _this;
            }
            /**
             * 根据UID获取器材。
             * @param UID
             * @returns {any}
             */
            EqLayer.prototype.getEqByUID = function (UID) {
                var eq;
                for (var i = 0; i < this.children.length; i++) {
                    eq = this.children[i];
                    if (eq.UID === UID) {
                        return eq;
                    }
                }
                return null;
            };
            return EqLayer;
        }(elec.Container));
        elec.EqLayer = EqLayer;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var Wire = /** @class */ (function (_super) {
            __extends(Wire, _super);
            function Wire(main) {
                return _super.call(this, main) || this;
            }
            return Wire;
        }(elec.Resistance));
        elec.Wire = Wire;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/9/19.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var HEvent = /** @class */ (function (_super) {
            __extends(HEvent, _super);
            function HEvent() {
                return _super.call(this) || this;
            }
            HEvent.DRAG_START = "dragStart";
            HEvent.DRAG_MOVE = "dragMove";
            return HEvent;
        }(elec.HObject));
        elec.HEvent = HEvent;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var Battery = /** @class */ (function (_super) {
            __extends(Battery, _super);
            function Battery(main) {
                return _super.call(this, main) || this;
            }
            Battery.prototype.initSkin = function () {
                var gra = new PIXI.Graphics();
                gra.beginFill(0x000000, 1.0);
                gra.drawRect(-50, -20, 100, 40);
                gra.drawRect(50, -5, 4, 10);
                gra.endFill();
                this.addChild(gra);
            };
            return Battery;
        }(elec.VoltageSource));
        elec.Battery = Battery;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/9/18.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var ViewStack = /** @class */ (function (_super) {
            __extends(ViewStack, _super);
            function ViewStack(main) {
                var _this = _super.call(this, main) || this;
                _this.interactive = true;
                _this.eqLayer = new elec.EqLayer(_this.main);
                _this.addChild(_this.eqLayer);
                _this.assistLayer = new elec.Container(_this.main);
                _this.addChild(_this.assistLayer);
                return _this;
            }
            return ViewStack;
        }(elec.Container));
        elec.ViewStack = ViewStack;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var DragPlugin = /** @class */ (function (_super) {
            __extends(DragPlugin, _super);
            function DragPlugin(main) {
                var _this = _super.call(this, main) || this;
                _this.map = {};
                return _this;
            }
            DragPlugin.prototype.destroy = function () {
                this.map = null;
                _super.prototype.destroy.call(this);
            };
            DragPlugin.prototype.onMouseDown = function (e) {
                _super.prototype.onMouseDown.call(this, e);
                if (e.target instanceof elec.EqBase) {
                    this.map[e.data.identifier] = new DragItem(e.target, e.data.identifier, this.global2view(e.data.global));
                }
            };
            DragPlugin.prototype.onMouseMove = function (e) {
                _super.prototype.onMouseMove.call(this, e);
                var dragItem = this.map[e.data.identifier];
                if (dragItem) {
                    if (!dragItem.eq.isSelect) {
                        this.main.select([dragItem.eq], e.data.originalEvent.ctrlKey);
                    }
                    var p = this.global2view(e.data.global);
                    this.main.moveSelectBy(p.x - dragItem.p.x, p.y - dragItem.p.y);
                    dragItem.p = p;
                    dragItem.moved = true;
                }
            };
            DragPlugin.prototype.onMouseUp = function (e) {
                _super.prototype.onMouseUp.call(this, e);
                if (this.map[e.data.identifier]) {
                    var dragItem = this.map[e.data.identifier];
                    if (dragItem.moved) {
                        e.stopPropagation();
                    }
                    delete this.map[e.data.identifier];
                }
            };
            return DragPlugin;
        }(elec.PluginBase));
        elec.DragPlugin = DragPlugin;
        var DragItem = /** @class */ (function () {
            function DragItem(eq, id, p) {
                this.moved = false;
                this.eq = eq;
                this.id = id;
                this.p = p;
            }
            return DragItem;
        }());
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var Point = PIXI.Point;
        var ElecMain = /** @class */ (function (_super) {
            __extends(ElecMain, _super);
            function ElecMain(canvas) {
                var _this = _super.call(this) || this;
                _this.selects = [];
                window.main = _this;
                // init app
                _this.canvas = canvas;
                _this.app = new PIXI.Application({ view: canvas, transparent: true });
                _this.stage = _this.app.stage;
                _this.stage.interactive = true;
                _this.stage.hitArea = new StageHitArea();
                // init viewStack
                _this.viewStack = new elec.ViewStack(_this);
                _this.stage.addChild(_this.viewStack);
                // init ticker
                _this.ticker = _this.app.ticker;
                _this.startTicker();
                _this.ticker.add(_this.update, _this);
                // init plugin
                _this.pluginManager = new elec.PluginManager(_this);
                _this.pluginManager.registerPlugin(new elec.DragPlugin(_this));
                _this.pluginManager.registerPlugin(new elec.SelectPlugin(_this));
                _this.pluginManager.registerPlugin(new elec.RoamPlugin(_this));
                _this.pluginManager.registerPlugin(new elec.ZoomPlugin(_this));
                _this.resized();
                _this.addEq("Battery", new Point(500, 300));
                _this.addEq("Resistance", new Point(200, 300));
                return _this;
            }
            ElecMain.prototype.destroy = function () {
                this.pluginManager.destroy();
                this.stopTicker();
                this.ticker = null;
            };
            ElecMain.prototype.update = function (deltaTime) {
                var eq;
                for (var i = 0; i < this.viewStack.eqLayer.children.length; i++) {
                    eq = this.viewStack.eqLayer.children[i];
                    eq.update(this.ticker.deltaMS);
                }
            };
            ElecMain.prototype.resized = function () {
            };
            ElecMain.prototype.startTicker = function () {
                if (!this.ticker.started) {
                    this.ticker.start();
                }
            };
            ElecMain.prototype.stopTicker = function () {
                if (this.ticker.started) {
                    this.ticker.stop();
                }
            };
            ElecMain.prototype.select = function (eqs, add) {
                for (var i = 0; i < this.selects.length; i++) {
                    this.selects[i].isSelect = false;
                }
                if (!add) {
                    this.selects.length = 0;
                }
                for (var i = 0; i < eqs.length; i++) {
                    var eq = eqs[i];
                    var ind = this.selects.indexOf(eq);
                    if (ind === -1) {
                        this.selects.push(eq);
                    }
                    else {
                        this.selects.splice(ind, 1);
                    }
                }
                for (var i = 0; i < this.selects.length; i++) {
                    this.selects[i].isSelect = true;
                }
            };
            ElecMain.prototype.addEq = function (className, p) {
                var clazz = hanyeah.elec[className];
                if (clazz) {
                    var eq = new clazz(this);
                    eq.x = p.x;
                    eq.y = p.y;
                    this.viewStack.eqLayer.addChild(eq);
                    return eq;
                }
                return null;
            };
            ElecMain.prototype.removeEq = function (UID) {
                var eq = this.viewStack.eqLayer.getEqByUID(UID);
                if (eq) {
                    this.viewStack.eqLayer.removeChild(eq);
                }
                return eq;
            };
            ElecMain.prototype.moveSelectBy = function (dx, dy) {
                for (var i = 0; i < this.selects.length; i++) {
                    this.selects[i].moveBy(dx, dy);
                }
            };
            ElecMain.prototype.moveStageBy = function (dx, dy) {
                this.viewStack.x += dx;
                this.viewStack.y += dy;
            };
            ElecMain.prototype.scaleBy = function (s, p) {
                var s0 = this.viewStack.scale.x;
                var s1 = s0 * s;
                this.viewStack.scale.x = s1;
                this.viewStack.scale.y = s1;
                this.viewStack.x += p.x * (1 - s) * s0;
                this.viewStack.y += p.y * (1 - s) * s0;
            };
            ElecMain.prototype.selectByRect = function (rect) {
                var eq;
                // const rect0: Rectangle;
                var arr = [];
                for (var i = 0; i < this.viewStack.eqLayer.children.length; i++) {
                    eq = this.viewStack.eqLayer.children[i];
                    // if (eq.getBounds(true, rect0).) {
                    //
                    // }
                    if (rect.contains(eq.x, eq.y)) {
                        arr.push(eq);
                    }
                }
                this.select(arr, false);
            };
            ElecMain.prototype.global2view = function (p) {
                return this.viewStack.toLocal(p);
            };
            return ElecMain;
        }(elec.HObject));
        elec.ElecMain = ElecMain;
        /**
         * stage的hitArea，永远返回true，实现舞台任意位置点击都有事件。
         */
        var StageHitArea = /** @class */ (function () {
            function StageHitArea() {
                //
            }
            StageHitArea.prototype.contains = function (x, y) {
                return true;
            };
            return StageHitArea;
        }());
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/9/20.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var PluginManager = /** @class */ (function () {
            function PluginManager(main) {
                this.plugins = [];
                this.main = main;
                this.main.stage.addListener("pointerdown", this.mouseDownHandler, this);
                this.main.stage.addListener("pointermove", this.mouseMoveHandler, this);
                this.main.stage.addListener("pointerup", this.mouseUpHandler, this);
                this.main.stage.addListener("pointerupoutside", this.mouseUpHandler, this);
                this.main.stage.addListener("pointertap", this.clickHandler, this);
                this.main.canvas.addEventListener("mousewheel", this.mouseWheelHandler);
            }
            PluginManager.prototype.destroy = function () {
                this.main.stage.removeListener("pointerdown", this.mouseDownHandler, this);
                this.main.stage.removeListener("pointermove", this.mouseMoveHandler, this);
                this.main.stage.removeListener("pointerup", this.mouseUpHandler, this);
                this.main.stage.removeListener("pointerupoutside", this.mouseUpHandler, this);
                this.main.stage.removeListener("pointertap", this.clickHandler, this);
                this.main.canvas.removeEventListener("mousewheel", this.mouseWheelHandler);
                for (var i = 0; i < this.plugins.length; i++) {
                    this.plugins[i].destroy();
                }
                this.plugins = null;
                this.main = null;
            };
            PluginManager.prototype.registerPlugin = function (plugin) {
                this.plugins.push(plugin);
            };
            PluginManager.prototype.unRegisterPlugin = function (plugin, destroy) {
                if (destroy === void 0) { destroy = true; }
                var ind = this.plugins.indexOf(plugin);
                if (ind) {
                    if (destroy) {
                        this.plugins[ind].destroy();
                    }
                    this.plugins.splice(ind, 1);
                }
            };
            PluginManager.prototype.mouseDownHandler = function (e) {
                this.plugins.forEach(function (plugin) {
                    plugin.mouseP = e.data.global.clone();
                    if (e.data.button === 0) {
                        plugin.onMouseDown(e);
                    }
                    else if (e.data.button === 2) {
                        plugin.onRightDown(e);
                    }
                });
            };
            PluginManager.prototype.mouseMoveHandler = function (e) {
                this.plugins.forEach(function (plugin) {
                    plugin.mouseP = e.data.global.clone();
                    plugin.onMouseMove(e);
                });
            };
            PluginManager.prototype.mouseUpHandler = function (e) {
                this.plugins.forEach(function (plugin) {
                    if (e.data.button === 0) {
                        plugin.onMouseUp(e);
                    }
                    else if (e.data.button === 2) {
                        plugin.onRightUp(e);
                    }
                });
            };
            PluginManager.prototype.mouseWheelHandler = function (e) {
                this.plugins.forEach(function (plugin) {
                    plugin.onMouseWheel(e);
                });
            };
            PluginManager.prototype.clickHandler = function (e) {
                this.plugins.forEach(function (plugin) {
                    if (e.data.button === 0) {
                        plugin.onClick(e);
                    }
                    else if (e.data.button === 2) {
                        plugin.onRightClick(e);
                    }
                });
            };
            return PluginManager;
        }());
        elec.PluginManager = PluginManager;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/9/18.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var RoamPlugin = /** @class */ (function (_super) {
            __extends(RoamPlugin, _super);
            function RoamPlugin(main) {
                var _this = _super.call(this, main) || this;
                _this.map = {};
                return _this;
            }
            RoamPlugin.prototype.destroy = function () {
                this.map = null;
                _super.prototype.destroy.call(this);
            };
            RoamPlugin.prototype.onMouseDown = function (e) {
                _super.prototype.onMouseDown.call(this, e);
                if (e.target === this.main.stage) {
                    this.map[e.data.identifier] = e.data.global.clone();
                }
            };
            RoamPlugin.prototype.onMouseMove = function (e) {
                _super.prototype.onMouseMove.call(this, e);
                var lp = this.map[e.data.identifier];
                if (lp) {
                    var p = e.data.global;
                    this.main.moveStageBy(p.x - lp.x, p.y - lp.y);
                    lp.x = p.x;
                    lp.y = p.y;
                }
            };
            RoamPlugin.prototype.onMouseUp = function (e) {
                _super.prototype.onMouseUp.call(this, e);
                if (this.map[e.data.identifier]) {
                    delete this.map[e.data.identifier];
                }
            };
            return RoamPlugin;
        }(elec.PluginBase));
        elec.RoamPlugin = RoamPlugin;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/9/18.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var Rectangle = PIXI.Rectangle;
        var SelectPlugin = /** @class */ (function (_super) {
            __extends(SelectPlugin, _super);
            function SelectPlugin(main) {
                var _this = _super.call(this, main) || this;
                _this.map = {};
                return _this;
            }
            SelectPlugin.prototype.destroy = function () {
                this.map = null;
                _super.prototype.destroy.call(this);
            };
            SelectPlugin.prototype.onClick = function (e) {
                _super.prototype.onClick.call(this, e);
                if (e.target instanceof elec.EqBase) {
                    this.main.select([e.target], e.data.originalEvent.ctrlKey);
                }
                else {
                    this.main.select([], false);
                }
            };
            SelectPlugin.prototype.onRightDown = function (e) {
                _super.prototype.onRightDown.call(this, e);
                if (e.target === this.main.stage) {
                    var p = this.global2view(e.data.global);
                    var item = new DragSelectItem(p, p.clone());
                    this.map[e.data.identifier] = item;
                    this.main.viewStack.assistLayer.addChild(item.gra);
                }
            };
            SelectPlugin.prototype.onRightUp = function (e) {
                _super.prototype.onRightUp.call(this, e);
                if (this.map[e.data.identifier]) {
                    var item = this.map[e.data.identifier];
                    this.main.viewStack.assistLayer.removeChild(item.gra);
                    delete this.map[e.data.identifier];
                    e.stopPropagation();
                }
            };
            SelectPlugin.prototype.onMouseMove = function (e) {
                _super.prototype.onMouseMove.call(this, e);
                if (this.map[e.data.identifier]) {
                    var item = this.map[e.data.identifier];
                    item.p1 = this.global2view(e.data.global);
                    item.update();
                    this.main.selectByRect(item.rect);
                }
            };
            return SelectPlugin;
        }(elec.PluginBase));
        elec.SelectPlugin = SelectPlugin;
        var DragSelectItem = /** @class */ (function () {
            function DragSelectItem(p0, p1) {
                this.p0 = p0;
                this.p1 = p1;
                this.gra = new PIXI.Graphics();
                this.rect = new Rectangle();
            }
            DragSelectItem.prototype.update = function () {
                this.rect.x = Math.min(this.p0.x, this.p1.x);
                this.rect.y = Math.min(this.p0.y, this.p1.y);
                this.rect.width = Math.abs(this.p0.x - this.p1.x);
                this.rect.height = Math.abs(this.p0.y - this.p1.y);
                this.gra.clear();
                this.gra.lineStyle(1, 0x000000, 1.0);
                this.gra.beginFill(0x000000, 0.3);
                this.gra.drawRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
                this.gra.endFill();
            };
            return DragSelectItem;
        }());
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/9/18.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var ZoomPlugin = /** @class */ (function (_super) {
            __extends(ZoomPlugin, _super);
            function ZoomPlugin(main) {
                return _super.call(this, main) || this;
            }
            ZoomPlugin.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            ZoomPlugin.prototype.onMouseWheel = function (e) {
                _super.prototype.onMouseWheel.call(this, e);
                var delta = e.wheelDelta ? (e.wheelDelta / 120) : (-e.detail / 3);
                var p = this.global2view(this.mouseP);
                var s = Math.min(Math.max(1 + delta * 0.1, 0.1), 2);
                this.main.scaleBy(s, p);
            };
            return ZoomPlugin;
        }(elec.PluginBase));
        elec.ZoomPlugin = ZoomPlugin;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/9/19.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var CommandAddEq = /** @class */ (function (_super) {
            __extends(CommandAddEq, _super);
            function CommandAddEq(main, eqClassName, p, UID) {
                var _this = _super.call(this, main) || this;
                _this.className = "CommandAddEq";
                _this.eqClassName = eqClassName;
                _this.p = p;
                _this.eqUID = UID;
                return _this;
            }
            CommandAddEq.prototype.destroy = function () {
                this.className = null;
                this.p = null;
                _super.prototype.destroy.call(this);
            };
            CommandAddEq.prototype.redo = function () {
                var eq = this.main.addEq(this.eqClassName, this.p);
                eq.UID = this.eqUID;
            };
            CommandAddEq.prototype.undo = function () {
                this.main.removeEq(this.eqUID);
            };
            CommandAddEq.prototype.getData = function () {
                var obj = _super.prototype.getData.call(this);
                obj.eqClassName = this.eqClassName;
                obj.p = {
                    x: this.p.x,
                    y: this.p.y
                };
                obj.eqUID = this.eqUID;
                return obj;
            };
            return CommandAddEq;
        }(elec.RedoUndo));
        elec.CommandAddEq = CommandAddEq;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var SingleSwitch = /** @class */ (function (_super) {
            __extends(SingleSwitch, _super);
            function SingleSwitch(main) {
                return _super.call(this, main) || this;
            }
            SingleSwitch.prototype.initSkin = function () {
            };
            return SingleSwitch;
        }(elec.ElecEq));
        elec.SingleSwitch = SingleSwitch;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/9/19.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var RedoUndoManager = /** @class */ (function () {
            function RedoUndoManager(maxStep) {
                this.undoStack = [];
                this.redoStack = [];
                this.maxStep = 20;
                this.maxStep = maxStep;
            }
            RedoUndoManager.prototype.addUndo = function (command) {
                this.undoStack.push(command);
                if (this.undoStack.length > this.maxStep) {
                    this.undoStack.shift();
                }
            };
            RedoUndoManager.prototype.undo = function () {
                if (this.undoStack.length) {
                    var command = this.undoStack.pop();
                    command.undo();
                    this.redoStack.push(command);
                }
            };
            RedoUndoManager.prototype.redo = function () {
                if (this.redoStack.length) {
                    var command = this.redoStack.pop();
                    command.redo();
                    this.undoStack.push(command);
                }
            };
            RedoUndoManager.prototype.canUndo = function () {
                return this.undoStack.length > 0;
            };
            RedoUndoManager.prototype.canRedo = function () {
                return this.redoStack.length > 0;
            };
            Object.defineProperty(RedoUndoManager.prototype, "currentUndoStep", {
                get: function () {
                    return this.undoStack.length;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(RedoUndoManager.prototype, "currentRedoStep", {
                get: function () {
                    return this.redoStack.length;
                },
                enumerable: true,
                configurable: true
            });
            return RedoUndoManager;
        }());
        elec.RedoUndoManager = RedoUndoManager;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
