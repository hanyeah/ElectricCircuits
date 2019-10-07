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
                _this.UID = elec.MathUtil.getUID();
                _this.className = "Container";
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
            Container.prototype.getData = function () {
                return {
                    UID: this.UID,
                    className: this.className
                };
            };
            Container.prototype.setData = function (obj) {
                this.UID = obj.UID;
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
                _this.isSelect = false;
                _this.interactive = true;
                return _this;
            }
            EqBase.prototype.init = function () {
                this.initSkin();
                this.initPlugin();
            };
            EqBase.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            EqBase.prototype.initSkin = function () {
            };
            EqBase.prototype.initPlugin = function () {
            };
            EqBase.prototype.update = function (dt) {
                if (this.isSelect) {
                    this.alpha = 0.8;
                }
                else {
                    this.alpha = 1.0;
                }
            };
            EqBase.prototype.getData = function () {
                var obj = _super.prototype.getData.call(this);
                return obj;
            };
            EqBase.prototype.setData = function (obj) {
                _super.prototype.setData.call(this, obj);
            };
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
                _this.isBreak = false;
                return _this;
            }
            ElecEq.prototype.addTerminal = function (x, y) {
                var terminal = new elec.Terminal(this.main);
                terminal.eq = this;
                terminal.x = x;
                terminal.y = y;
                this.addChild(terminal);
                return terminal;
            };
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
/**
 * Created by hanyeah on 2019/9/21.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var Edge = hanyeah.electricity.elecData.Edge;
        var TwoTerminalEq = /** @class */ (function (_super) {
            __extends(TwoTerminalEq, _super);
            function TwoTerminalEq(main) {
                var _this = _super.call(this, main) || this;
                _this.terminal0 = _this.addTerminal(-50, 0);
                _this.terminal1 = _this.addTerminal(50, 0);
                _this.edge = new Edge(_this.main.world, null, null);
                _this.terminal0.vertex = _this.edge.vertex0;
                _this.terminal1.vertex = _this.edge.vertex1;
                return _this;
            }
            TwoTerminalEq.prototype.destroy = function () {
                this.edge.destroy();
                this.terminal0.destroy();
                this.terminal1.destroy();
                this.terminal0 = null;
                this.terminal1 = null;
                _super.prototype.destroy.call(this);
            };
            TwoTerminalEq.prototype.update = function (dt) {
                _super.prototype.update.call(this, dt);
                this.U = this.edge.U;
                this.I = this.edge.I;
            };
            TwoTerminalEq.prototype.getData = function () {
                var obj = _super.prototype.getData.call(this);
                obj.terminal0 = this.terminal0.getData();
                obj.terminal1 = this.terminal1.getData();
                return obj;
            };
            TwoTerminalEq.prototype.setData = function (obj) {
                _super.prototype.setData.call(this, obj);
                this.terminal0.setData(obj.terminal0);
                this.terminal1.setData(obj.terminal1);
            };
            return TwoTerminalEq;
        }(elec.ElecEq));
        elec.TwoTerminalEq = TwoTerminalEq;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var Resistance = /** @class */ (function (_super) {
            __extends(Resistance, _super);
            function Resistance(main) {
                var _this = _super.call(this, main) || this;
                _this.className = "Resistance";
                _this.R = 1.0;
                _this.edge.R = _this.R;
                return _this;
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
        }(elec.TwoTerminalEq));
        elec.Resistance = Resistance;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/9/25.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var KeyCode;
        (function (KeyCode) {
            KeyCode[KeyCode["enter"] = 13] = "enter";
            KeyCode[KeyCode["esc"] = 27] = "esc";
            KeyCode[KeyCode["backspace"] = 8] = "backspace";
            KeyCode[KeyCode["tab"] = 9] = "tab";
            KeyCode[KeyCode["shift"] = 16] = "shift";
            KeyCode[KeyCode["ctrl"] = 17] = "ctrl";
            KeyCode[KeyCode["alt"] = 18] = "alt";
            KeyCode[KeyCode["space"] = 32] = "space";
            KeyCode[KeyCode["pause"] = 19] = "pause";
            KeyCode[KeyCode["pageup"] = 33] = "pageup";
            KeyCode[KeyCode["pagedown"] = 34] = "pagedown";
            KeyCode[KeyCode["end"] = 35] = "end";
            KeyCode[KeyCode["home"] = 36] = "home";
            KeyCode[KeyCode["left"] = 37] = "left";
            KeyCode[KeyCode["up"] = 38] = "up";
            KeyCode[KeyCode["right"] = 39] = "right";
            KeyCode[KeyCode["down"] = 40] = "down";
            KeyCode[KeyCode["insert"] = 45] = "insert";
            KeyCode[KeyCode["delete"] = 46] = "delete";
            KeyCode[KeyCode["f1"] = 112] = "f1";
            KeyCode[KeyCode["f2"] = 113] = "f2";
            KeyCode[KeyCode["f3"] = 114] = "f3";
            KeyCode[KeyCode["f4"] = 115] = "f4";
            KeyCode[KeyCode["f5"] = 116] = "f5";
            KeyCode[KeyCode["f6"] = 117] = "f6";
            KeyCode[KeyCode["f7"] = 118] = "f7";
            KeyCode[KeyCode["f8"] = 119] = "f8";
            KeyCode[KeyCode["f9"] = 120] = "f9";
            KeyCode[KeyCode["f10"] = 121] = "f10";
            KeyCode[KeyCode["f11"] = 122] = "f11";
            KeyCode[KeyCode["f12"] = 123] = "f12";
            KeyCode[KeyCode["dot"] = 190] = "dot";
            KeyCode[KeyCode["dotnumpad"] = 110] = "dotnumpad";
            KeyCode[KeyCode["coma"] = 188] = "coma";
            KeyCode[KeyCode["comanumpad"] = 0] = "comanumpad";
            KeyCode[KeyCode["a"] = 65] = "a";
            KeyCode[KeyCode["b"] = 66] = "b";
            KeyCode[KeyCode["c"] = 67] = "c";
            KeyCode[KeyCode["d"] = 68] = "d";
            KeyCode[KeyCode["e"] = 69] = "e";
            KeyCode[KeyCode["f"] = 70] = "f";
            KeyCode[KeyCode["g"] = 71] = "g";
            KeyCode[KeyCode["h"] = 72] = "h";
            KeyCode[KeyCode["i"] = 73] = "i";
            KeyCode[KeyCode["j"] = 74] = "j";
            KeyCode[KeyCode["k"] = 75] = "k";
            KeyCode[KeyCode["l"] = 76] = "l";
            KeyCode[KeyCode["m"] = 77] = "m";
            KeyCode[KeyCode["n"] = 78] = "n";
            KeyCode[KeyCode["o"] = 79] = "o";
            KeyCode[KeyCode["p"] = 80] = "p";
            KeyCode[KeyCode["q"] = 81] = "q";
            KeyCode[KeyCode["r"] = 82] = "r";
            KeyCode[KeyCode["s"] = 83] = "s";
            KeyCode[KeyCode["t"] = 84] = "t";
            KeyCode[KeyCode["u"] = 85] = "u";
            KeyCode[KeyCode["v"] = 86] = "v";
            KeyCode[KeyCode["w"] = 87] = "w";
            KeyCode[KeyCode["x"] = 88] = "x";
            KeyCode[KeyCode["y"] = 89] = "y";
            KeyCode[KeyCode["z"] = 90] = "z";
            KeyCode[KeyCode["zero"] = 48] = "zero";
            KeyCode[KeyCode["one"] = 49] = "one";
            KeyCode[KeyCode["two"] = 50] = "two";
            KeyCode[KeyCode["three"] = 51] = "three";
            KeyCode[KeyCode["four"] = 52] = "four";
            KeyCode[KeyCode["five"] = 53] = "five";
            KeyCode[KeyCode["six"] = 54] = "six";
            KeyCode[KeyCode["seven"] = 55] = "seven";
            KeyCode[KeyCode["eight"] = 56] = "eight";
            KeyCode[KeyCode["nine"] = 57] = "nine";
        })(KeyCode = elec.KeyCode || (elec.KeyCode = {}));
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
                _this.map = {};
                _this.main = main;
                return _this;
            }
            PluginBase.prototype.destroy = function () {
                this.main = null;
                this.mouseP = null;
                this.map = null;
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
            /**
             * 键盘按下事件
             * @param e
             */
            PluginBase.prototype.onKeyDown = function (e, keyMap) {
            };
            /**
             * 键盘弹起事件
             * @param e
             */
            PluginBase.prototype.onKeyUp = function (e, keyMap) {
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
 * Created by hanyeah on 2019/9/26.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var RouterBase = /** @class */ (function () {
            function RouterBase(vertexs) {
                this.vertexs = vertexs;
            }
            RouterBase.prototype.addVertex = function (vertex) {
            };
            return RouterBase;
        }());
        elec.RouterBase = RouterBase;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var Point = PIXI.Point;
        var Rectangle = PIXI.Rectangle;
        var World = hanyeah.electricity.World;
        var ElecMain = /** @class */ (function (_super) {
            __extends(ElecMain, _super);
            function ElecMain(canvas) {
                var _this = _super.call(this) || this;
                _this.selects = [];
                window.main = _this;
                _this.world = new World();
                // init app
                _this.canvas = canvas;
                _this.app = new PIXI.Application({ view: canvas, transparent: true, antialias: true });
                _this.renderer = _this.app.renderer;
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
                _this.pluginManager.registerPlugin(new elec.HotkeyPlugin(_this));
                _this.pluginManager.registerPlugin(new elec.DrawWirePlugin(_this));
                var hotkeyPlugin = new elec.HotkeyPlugin(_this);
                _this.pluginManager.registerPlugin(hotkeyPlugin);
                hotkeyPlugin.registerHotKey("delete", _this.deleteSelects, _this);
                hotkeyPlugin.registerHotKey("ctrl+a", _this.selectAll, _this);
                _this.resized();
                _this.addEq("Battery", new Point(500, 300));
                _this.addEq("Resistance", new Point(200, 300));
                _this.addEq("SingleSwitch", new Point(200, 400));
                _this.addEq("Wire", new Point(500, 400));
                _this.addEq("Bulb", new Point(350, 350));
                _this.addEq("DoubleSwitch", new Point(350, 500));
                _this.addEq("SlideRheostat", new Point(250, 500));
                return _this;
            }
            ElecMain.prototype.destroy = function () {
                this.pluginManager.destroy();
                this.stopTicker();
                this.ticker = null;
            };
            ElecMain.prototype.update = function (deltaTime) {
                var _this = this;
                for (var i = 0; i < this.selects.length; i++) {
                    this.selects[i].isSelect = true;
                }
                this.world.calculate();
                this.forEachEq(function (eq) {
                    eq.update(_this.ticker.deltaMS);
                });
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
            };
            ElecMain.prototype.addEq = function (className, p) {
                var clazz = hanyeah.elec[className];
                if (clazz) {
                    var eq = new clazz(this);
                    eq.init();
                    eq.x = p.x;
                    eq.y = p.y;
                    this.viewStack.eqLayer.addChild(eq);
                    return eq;
                }
                return null;
            };
            ElecMain.prototype.removeEq = function (eq) {
                this.viewStack.eqLayer.removeChild(eq);
                elec.ArrayUtil.remove(this.selects, eq);
                eq.destroy();
            };
            ElecMain.prototype.getEq = function (UID) {
                return this.viewStack.eqLayer.getEqByUID(UID);
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
                var sc = this.getScale();
                var rect0 = new Rectangle();
                var rect1 = new Rectangle(rect.x * sc + this.viewStack.x, rect.y * sc + this.viewStack.y, rect.width * sc, rect.height * sc);
                var arr = [];
                this.forEachEq(function (eq) {
                    if (elec.RectangleUtil.intersects(rect1, eq.getBounds(true, rect0), false)) {
                        arr.push(eq);
                    }
                });
                this.select(arr, false);
            };
            ElecMain.prototype.selectAll = function () {
                var arr = [];
                this.forEachEq(function (eq) {
                    arr.push(eq);
                });
                this.select(arr, false);
            };
            ElecMain.prototype.deleteSelects = function () {
                var _this = this;
                this.selects.forEach(function (eq) {
                    _this.viewStack.eqLayer.removeChild(eq);
                    eq.destroy();
                });
                this.selects = [];
            };
            ElecMain.prototype.deleteAll = function () {
                this.forEachEq(function (eq) {
                    eq.destroy();
                });
                this.viewStack.eqLayer.removeChildren();
                this.selects = [];
            };
            ElecMain.prototype.forEachEq = function (callBack, inverted) {
                if (inverted === void 0) { inverted = false; }
                if (inverted) {
                    for (var i = this.viewStack.eqLayer.children.length - 1; i >= 0; i--) {
                        callBack(this.viewStack.eqLayer.children[i]);
                    }
                }
                else {
                    for (var i = 0; i < this.viewStack.eqLayer.children.length; i++) {
                        callBack(this.viewStack.eqLayer.children[i]);
                    }
                }
            };
            ElecMain.prototype.getData = function () {
                var obj = {};
                obj.eqs = [];
                this.forEachEq(function (eq) {
                    obj.eqs.push(eq.getData());
                });
                return obj;
            };
            ElecMain.prototype.setData = function (obj) {
            };
            ElecMain.prototype.getScale = function () {
                return this.viewStack.scale.x;
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
 * Created by hanyeah on 2019/9/22.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var HitArea = /** @class */ (function () {
            function HitArea(con, x, y) {
                this.r = 10;
                var gra = new PIXI.Graphics();
                gra.beginFill(0xff0000, 0.3);
                gra.drawCircle(x, y, this.r);
                gra.endFill();
                con.addChild(gra);
                this.x = x;
                this.y = y;
            }
            HitArea.prototype.contains = function (x, y) {
                var dx = x - this.x;
                var dy = y - this.y;
                return dx * dx + dy * dy < this.r * this.r;
            };
            return HitArea;
        }());
        elec.HitArea = HitArea;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/9/20.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var Point = PIXI.Point;
        var Terminal = /** @class */ (function (_super) {
            __extends(Terminal, _super);
            function Terminal(main) {
                var _this = _super.call(this, main) || this;
                _this.UID = elec.MathUtil.getUID();
                _this.interactive = true;
                _this.hitArea = new TerminalHItArea();
                var gra = new PIXI.Graphics();
                _this.addChild(gra);
                gra.beginFill(0xff0000, 0.2);
                gra.drawCircle(0, 0, 5);
                gra.endFill();
                return _this;
            }
            Object.defineProperty(Terminal.prototype, "leader", {
                get: function () {
                    return this._leader;
                },
                set: function (value) {
                    this.disConnect();
                    this._leader = value;
                    if (value) {
                        this.connect(value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Terminal.prototype.destroy = function () {
                this.leader = null;
                _super.prototype.destroy.call(this);
            };
            Terminal.prototype.update = function () {
                if (this.leader && this.parent) {
                    this.setPosition(this.parent.toLocal(new Point(), this.leader));
                }
            };
            Terminal.prototype.setPosition = function (p) {
                this.setPosition2(p.x, p.y);
            };
            Terminal.prototype.setPosition2 = function (x, y) {
                this.x = x;
                this.y = y;
            };
            Terminal.prototype.getData = function () {
                var obj = {};
                obj.UID = this.UID;
                if (this.leader) {
                    obj.leader = this.leader.UID;
                }
                return obj;
            };
            Terminal.prototype.setData = function (obj) {
                this.UID = obj.UID;
                if (obj.leader) {
                    // this.main
                }
            };
            Terminal.prototype.connect = function (terminal) {
                if (this.vertex && terminal.vertex) {
                    this.vertex.connect(terminal.vertex);
                }
            };
            Terminal.prototype.disConnect = function () {
                if (this.vertex) {
                    this.vertex.disConnect();
                }
            };
            return Terminal;
        }(elec.Container));
        elec.Terminal = Terminal;
        var TerminalHItArea = /** @class */ (function () {
            function TerminalHItArea() {
                this.r = 10;
            }
            TerminalHItArea.prototype.contains = function (x, y) {
                return x * x + y * y < this.r * this.r;
            };
            return TerminalHItArea;
        }());
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var Battery = /** @class */ (function (_super) {
            __extends(Battery, _super);
            function Battery(main) {
                var _this = _super.call(this, main) || this;
                _this.SU = 1.5;
                _this.className = "Battery";
                _this.edge.SU = _this.SU;
                return _this;
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
        }(elec.TwoTerminalEq));
        elec.Battery = Battery;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/9/22.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var Graphics = PIXI.Graphics;
        var Bulb = /** @class */ (function (_super) {
            __extends(Bulb, _super);
            function Bulb(main) {
                return _super.call(this, main) || this;
            }
            Bulb.prototype.initSkin = function () {
                var light = new Graphics();
                light.beginFill(0xffff00, 1.0);
                light.drawCircle(0, 0, 30);
                light.endFill();
                this.light = light;
                this.addChild(light);
                var gra = new Graphics();
                gra.lineStyle(6, 0x000000, 1.0);
                gra.drawCircle(0, 0, 30);
                gra.moveTo(21, 21);
                gra.lineTo(-21, -21);
                gra.moveTo(-21, 21);
                gra.lineTo(21, -21);
                gra.moveTo(-50, 0);
                gra.lineTo(-30, 0);
                gra.moveTo(50, 0);
                gra.lineTo(30, 0);
                this.addChild(gra);
            };
            Bulb.prototype.update = function (dt) {
                _super.prototype.update.call(this, dt);
                this.light.alpha = this.I === 0.0 ? 0 : 1.0;
            };
            return Bulb;
        }(elec.Resistance));
        elec.Bulb = Bulb;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/10/7.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var Graphics = PIXI.Graphics;
        var Edge = hanyeah.electricity.elecData.Edge;
        var Vertex = hanyeah.electricity.elecData.Vertex;
        var DoubleSwitch = /** @class */ (function (_super) {
            __extends(DoubleSwitch, _super);
            function DoubleSwitch(main) {
                var _this = _super.call(this, main) || this;
                _this.className = "DoubleSwitch";
                _this.terminal0 = _this.addTerminal(-50, 0);
                _this.terminal1 = _this.addTerminal(0, 0);
                _this.terminal2 = _this.addTerminal(50, 0);
                _this.terminal0.vertex = new Vertex(_this.main.world);
                _this.terminal1.vertex = new Vertex(_this.main.world);
                _this.terminal2.vertex = new Vertex(_this.main.world);
                _this.edge0 = new Edge(_this.main.world, _this.terminal0.vertex, _this.terminal1.vertex);
                _this.edge1 = new Edge(_this.main.world, _this.terminal1.vertex, _this.terminal2.vertex);
                return _this;
            }
            DoubleSwitch.prototype.init = function () {
                _super.prototype.init.call(this);
                this.knife.addListener("pointertap", this.toggleOpen, this);
                this.knife.rotation = elec.MathUtil.ang2rad(-30);
            };
            DoubleSwitch.prototype.initSkin = function () {
                var gra = new Graphics();
                gra.beginFill(0x000000, 1.0);
                gra.drawRect(-50, 0, 100, 20);
                gra.drawRect(-45, -20, 10, 20);
                gra.drawRect(45, -20, -10, 20);
                gra.drawRect(-5, -20, 10, 20);
                gra.endFill();
                this.addChild(gra);
                var knife = new Graphics();
                knife.beginFill(0x000000, 1.0);
                knife.drawRect(-5, -5, 60, 10);
                this.addChild(knife);
                knife.x = 0;
                knife.y = -15;
                knife.rotation = elec.MathUtil.ang2rad(-30);
                this.knife = knife;
                this.knife.interactive = true;
            };
            DoubleSwitch.prototype.update = function (dt) {
                _super.prototype.update.call(this, dt);
                this.edge0.isBreak = this.knife.rotation < -Math.PI + 0.1;
                this.edge1.isBreak = this.knife.rotation > -0.1;
            };
            DoubleSwitch.prototype.toggleOpen = function (e) {
            };
            return DoubleSwitch;
        }(elec.ElecEq));
        elec.DoubleSwitch = DoubleSwitch;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var Graphics = PIXI.Graphics;
        var SingleSwitch = /** @class */ (function (_super) {
            __extends(SingleSwitch, _super);
            function SingleSwitch(main) {
                var _this = _super.call(this, main) || this;
                _this.className = "SingleSwitch";
                _this.isBreak = true;
                _this.edge.isBreak = _this.isBreak;
                return _this;
            }
            SingleSwitch.prototype.init = function () {
                _super.prototype.init.call(this);
                this.knife.addListener("pointertap", this.toggleOpen, this);
            };
            SingleSwitch.prototype.initSkin = function () {
                var gra = new Graphics();
                gra.beginFill(0x000000, 1.0);
                gra.drawRect(-50, 0, 100, 20);
                gra.drawRect(-45, -20, 10, 20);
                gra.drawRect(45, -20, -10, 20);
                gra.endFill();
                this.addChild(gra);
                var knife = new Graphics();
                knife.beginFill(0x000000, 1.0);
                knife.drawRect(-5, -5, 120, 10);
                this.addChild(knife);
                knife.x = -40;
                knife.y = -15;
                knife.rotation = elec.MathUtil.ang2rad(-30);
                this.knife = knife;
                this.knife.interactive = true;
            };
            SingleSwitch.prototype.update = function (dt) {
                _super.prototype.update.call(this, dt);
                this.knife.rotation = this.isBreak ? -0.5 : 0;
            };
            SingleSwitch.prototype.toggleOpen = function (e) {
                this.isBreak = !this.isBreak;
                this.edge.isBreak = this.isBreak;
            };
            return SingleSwitch;
        }(elec.TwoTerminalEq));
        elec.SingleSwitch = SingleSwitch;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/10/7.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var Graphics = PIXI.Graphics;
        var Edge = hanyeah.electricity.elecData.Edge;
        var Vertex = hanyeah.electricity.elecData.Vertex;
        var SlideRheostat = /** @class */ (function (_super) {
            __extends(SlideRheostat, _super);
            function SlideRheostat(main) {
                var _this = _super.call(this, main) || this;
                _this.className = "SlideRheostat";
                _this.terminal0 = _this.addTerminal(-50, 0);
                _this.terminal1 = _this.addTerminal(50, 0);
                _this.terminal2 = _this.addTerminal(-50, -20);
                _this.terminal3 = _this.addTerminal(50, -20);
                _this.terminal0.vertex = new Vertex(_this.main.world);
                _this.terminal1.vertex = new Vertex(_this.main.world);
                _this.terminal2.vertex = _this.terminal3.vertex = new Vertex(_this.main.world);
                _this.edge0 = new Edge(_this.main.world, _this.terminal0.vertex, _this.terminal2.vertex);
                _this.edge1 = new Edge(_this.main.world, _this.terminal1.vertex, _this.terminal2.vertex);
                return _this;
            }
            SlideRheostat.prototype.initSkin = function () {
                var gra = new Graphics();
                gra.beginFill(0x000000, 1.0);
                gra.drawRect(-50, 0, 100, 20);
                gra.drawRect(-50, 10, -4, 10);
                gra.drawRect(50, 10, 4, 10);
                gra.drawRect(-50, -19, 100, 8);
                gra.drawRect(-50, -20, -4, 10);
                gra.drawRect(50, -20, 4, 10);
                gra.endFill();
                this.addChild(gra);
                var slide = new Graphics();
                slide.beginFill(0x0f0000, 1.0);
                slide.drawRect(-5, -10, 20, 30);
                this.addChild(slide);
                slide.x = 0;
                slide.y = -20;
                this.slide = slide;
                this.slide.interactive = true;
            };
            return SlideRheostat;
        }(elec.ElecEq));
        elec.SlideRheostat = SlideRheostat;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var Point = PIXI.Point;
        var Graphics = PIXI.Graphics;
        var SimpleRope = PIXI.SimpleRope;
        var Wire = /** @class */ (function (_super) {
            __extends(Wire, _super);
            function Wire(main) {
                var _this = _super.call(this, main) || this;
                _this.vertexs = [];
                _this.className = "Wire";
                _this.vertexs.push(new Point(-50, 0), new Point(50, 0));
                return _this;
            }
            Wire.prototype.update = function (dt) {
                _super.prototype.update.call(this, dt);
                this.terminal0.update();
                this.terminal1.update();
                this.vertexs[0].x = this.terminal0.x;
                this.vertexs[0].y = this.terminal0.y;
                var n = this.vertexs.length - 1;
                this.vertexs[n].x = this.terminal1.x;
                this.vertexs[n].y = this.terminal1.y;
                this.updateSkin();
            };
            Wire.prototype.initSkin = function () {
                var gra = new Graphics();
                gra.lineStyle(6, 0x000000);
                gra.moveTo(0, 0);
                gra.lineTo(50, 0);
                gra.lineStyle(1, 0xff0000);
                gra.beginFill(0xff0000, 1.0);
                gra.drawCircle(50, 0, 6);
                gra.endFill();
                var texture = this.main.renderer.generateTexture(gra);
                this.skin = new SimpleRope(texture, this.vertexs);
                this.addChild(this.skin);
            };
            Wire.prototype.updateSkin = function () {
                //
            };
            Wire.prototype.moveBy = function (dx, dy) {
                _super.prototype.moveBy.call(this, dx, dy);
            };
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
                return _super.call(this, main) || this;
            }
            DragPlugin.prototype.destroy = function () {
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
/**
 * Created by hanyeah on 2019/9/20.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var Point = PIXI.Point;
        var DrawWirePlugin = /** @class */ (function (_super) {
            __extends(DrawWirePlugin, _super);
            function DrawWirePlugin(main) {
                return _super.call(this, main) || this;
            }
            DrawWirePlugin.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            DrawWirePlugin.prototype.onMouseDown = function (e) {
                _super.prototype.onMouseDown.call(this, e);
                if (e.target instanceof elec.Terminal) {
                    var p = this.global2view(e.data.global);
                    var wire = this.main.addEq("Wire", new Point());
                    this.map[e.data.identifier] = wire;
                    wire.terminal0.setPosition(p);
                    wire.terminal1.setPosition(p);
                    wire.interactive = false;
                    wire.terminal0.leader = e.target;
                    wire.terminal0.interactive = false;
                    wire.terminal1.interactive = false;
                }
            };
            DrawWirePlugin.prototype.onMouseMove = function (e) {
                _super.prototype.onMouseMove.call(this, e);
                if (this.map[e.data.identifier]) {
                    var wire = this.map[e.data.identifier];
                    var p = this.global2view(e.data.global);
                    wire.terminal1.setPosition(p);
                }
            };
            DrawWirePlugin.prototype.onMouseUp = function (e) {
                _super.prototype.onMouseUp.call(this, e);
                if (this.map[e.data.identifier]) {
                    var wire = this.map[e.data.identifier];
                    var p = this.global2view(e.data.global);
                    if (e.target instanceof elec.Terminal && this.isLegalTerminal(wire, e.target)) {
                        wire.interactive = true;
                        wire.terminal1.leader = e.target;
                        wire.terminal0.interactive = true;
                        wire.terminal1.interactive = true;
                    }
                    else {
                        this.main.removeEq(wire);
                    }
                    delete this.map[e.data.identifier];
                }
            };
            DrawWirePlugin.prototype.isLegalTerminal = function (wire, terminal) {
                if (terminal.leader) {
                    terminal = terminal.leader;
                }
                return terminal !== wire.terminal0.leader && !(terminal.eq instanceof elec.Wire);
            };
            return DrawWirePlugin;
        }(elec.PluginBase));
        elec.DrawWirePlugin = DrawWirePlugin;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/9/20.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var KeyCode = hanyeah.elec.KeyCode;
        var HotkeyPlugin = /** @class */ (function (_super) {
            __extends(HotkeyPlugin, _super);
            function HotkeyPlugin(main) {
                var _this = _super.call(this, main) || this;
                _this.hotkeys = {};
                return _this;
            }
            HotkeyPlugin.prototype.destroy = function () {
                for (var hotkey in this.hotkeys) {
                    if (this.hotkeys.hasOwnProperty(hotkey)) {
                        this.hotkeys[hotkey].destroy();
                    }
                }
                this.hotkeys = null;
                _super.prototype.destroy.call(this);
            };
            HotkeyPlugin.prototype.registerHotKey = function (hotkey, command, context) {
                if (!this.hotkeys[hotkey]) {
                    this.hotkeys[hotkey] = new HotKeyItem(hotkey, command, context);
                }
            };
            HotkeyPlugin.prototype.unRegisterHotKey = function (hotkey) {
                var item = this.hotkeys[hotkey];
                if (item) {
                    item.destroy();
                    delete this.hotkeys[hotkey];
                }
            };
            /**
             * 键盘按下事件
             * @param e
             */
            HotkeyPlugin.prototype.onKeyDown = function (e, keyMap) {
                this.calculate(e.keyCode, keyMap);
            };
            /**
             * 键盘弹起事件
             * @param e
             */
            HotkeyPlugin.prototype.onKeyUp = function (e, keyMap) {
            };
            HotkeyPlugin.prototype.calculate = function (keyCode, keyMap) {
                for (var hotkey in this.hotkeys) {
                    if (this.hotkeys.hasOwnProperty(hotkey)) {
                        var item = this.hotkeys[hotkey];
                        if (item.match(keyCode, keyMap)) {
                            item.execute();
                            break;
                        }
                    }
                }
            };
            return HotkeyPlugin;
        }(elec.PluginBase));
        elec.HotkeyPlugin = HotkeyPlugin;
        var HotKeyItem = /** @class */ (function () {
            function HotKeyItem(hotkey, command, context) {
                var _this = this;
                this.hotkey = hotkey;
                this.command = command;
                this.context = context;
                this.keyArr = [];
                var a = hotkey.split("+");
                a.forEach(function (s) {
                    if (s && s !== "") {
                        _this.keyArr.push(s.toLowerCase());
                    }
                });
            }
            HotKeyItem.prototype.destroy = function () {
                this.hotkey = null;
                this.command = null;
                this.context = null;
                this.keyArr = null;
            };
            HotKeyItem.prototype.match = function (keyCode, keyMap) {
                var hasKeyCode = false;
                var hasHotKey = true;
                for (var i = 0; i < this.keyArr.length; i++) {
                    var s = this.keyArr[i];
                    var code = KeyCode[s];
                    if (!keyMap[code]) {
                        hasHotKey = false;
                        break;
                    }
                    if (keyCode === code) {
                        hasKeyCode = true;
                    }
                }
                return hasKeyCode && hasHotKey;
            };
            HotKeyItem.prototype.execute = function () {
                this.command.call(this.context);
            };
            return HotKeyItem;
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
                var _this = this;
                this.plugins = [];
                this.keyMap = {};
                this.mouseWheelHandler = function (e) {
                    _this.plugins.forEach(function (plugin) {
                        plugin.onMouseWheel(e);
                    });
                };
                this.keyDownHandler = function (e) {
                    _this.keyMap[e.keyCode] = true;
                    _this.plugins.forEach(function (plugin) {
                        plugin.onKeyDown(e, _this.keyMap);
                    });
                };
                this.keyUpHandler = function (e) {
                    _this.keyMap[e.keyCode] = false;
                    _this.plugins.forEach(function (plugin) {
                        plugin.onKeyUp(e, _this.keyMap);
                    });
                };
                this.main = main;
                this.main.stage.addListener("pointerdown", this.mouseDownHandler, this);
                this.main.stage.addListener("pointermove", this.mouseMoveHandler, this);
                this.main.stage.addListener("pointerup", this.mouseUpHandler, this);
                this.main.stage.addListener("pointerupoutside", this.mouseUpHandler, this);
                this.main.stage.addListener("pointertap", this.clickHandler, this);
                this.main.canvas.addEventListener("mousewheel", this.mouseWheelHandler);
                this.main.canvas.addEventListener("keydown", this.keyDownHandler);
                this.main.canvas.addEventListener("keyup", this.keyUpHandler);
            }
            PluginManager.prototype.destroy = function () {
                this.main.stage.removeListener("pointerdown", this.mouseDownHandler, this);
                this.main.stage.removeListener("pointermove", this.mouseMoveHandler, this);
                this.main.stage.removeListener("pointerup", this.mouseUpHandler, this);
                this.main.stage.removeListener("pointerupoutside", this.mouseUpHandler, this);
                this.main.stage.removeListener("pointertap", this.clickHandler, this);
                this.main.canvas.removeEventListener("mousewheel", this.mouseWheelHandler);
                this.main.canvas.removeEventListener("keydown", this.keyDownHandler);
                this.main.canvas.removeEventListener("keyup", this.keyUpHandler);
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
                return _super.call(this, main) || this;
            }
            RoamPlugin.prototype.destroy = function () {
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
                return _super.call(this, main) || this;
            }
            SelectPlugin.prototype.destroy = function () {
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
                    if (item.moved) {
                        e.stopPropagation();
                    }
                }
            };
            SelectPlugin.prototype.onMouseMove = function (e) {
                _super.prototype.onMouseMove.call(this, e);
                if (this.map[e.data.identifier]) {
                    var item = this.map[e.data.identifier];
                    item.p1 = this.global2view(e.data.global);
                    item.update();
                    this.main.selectByRect(item.rect);
                    item.moved = true;
                }
            };
            return SelectPlugin;
        }(elec.PluginBase));
        elec.SelectPlugin = SelectPlugin;
        var DragSelectItem = /** @class */ (function () {
            function DragSelectItem(p0, p1) {
                this.moved = false;
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
                var eq = this.main.getEq(this.eqUID);
                if (eq) {
                    this.main.removeEq(eq);
                }
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
/**
 * Created by hanyeah on 2019/9/26.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var DirectRouter = /** @class */ (function (_super) {
            __extends(DirectRouter, _super);
            function DirectRouter(vertexs) {
                return _super.call(this, vertexs) || this;
            }
            DirectRouter.prototype.addVertex = function (vertex) {
                if (this.vertexs.length === 0) {
                    this.vertexs[0] = vertex;
                }
                else {
                    this.vertexs[1] = vertex;
                }
            };
            return DirectRouter;
        }(elec.RouterBase));
        elec.DirectRouter = DirectRouter;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/9/22.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var ArrayUtil = /** @class */ (function () {
            function ArrayUtil() {
            }
            ArrayUtil.remove = function (arr, item) {
                var ind = arr.indexOf(item);
                if (ind !== -1) {
                    arr.splice(ind, 1);
                }
            };
            return ArrayUtil;
        }());
        elec.ArrayUtil = ArrayUtil;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/9/22.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var MathUtil = /** @class */ (function () {
            function MathUtil() {
            }
            MathUtil.getUID = function () {
                return MathUtil.COUNTING++;
            };
            MathUtil.ang2rad = function (ang) {
                return ang * Math.PI / 180;
            };
            MathUtil.rad2ang = function (rad) {
                return rad * 180 / Math.PI;
            };
            MathUtil.COUNTING = 0;
            return MathUtil;
        }());
        elec.MathUtil = MathUtil;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/9/20.
 */
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var Rectangle = PIXI.Rectangle;
        var RectangleUtil = /** @class */ (function () {
            function RectangleUtil() {
            }
            RectangleUtil.isEmpty = function (rect) {
                return rect.width === 0 || rect.height === 0;
            };
            RectangleUtil.normalize = function (rect) {
                if (rect.width < 0) {
                    rect.x += rect.width;
                    rect.width = -rect.width;
                }
                if (rect.height < 0) {
                    rect.y += rect.height;
                    rect.height = -rect.height;
                }
            };
            /**
             * 通过填充两个矩形之间的水平和垂直空间，将这两个矩形组合在一起以创建一个新的 Rectangle 对象。
             * @param toUnion  Rectangle
             * @returns {Rectangle}
             */
            RectangleUtil.union = function (rect0, rect1) {
                var leftX = Math.min(rect0.x, rect1.x);
                var leftY = Math.min(rect0.y, rect1.y);
                var newW = Math.max(rect0.x + rect0.width, rect1.x + rect1.width) - leftX;
                var newH = Math.max(rect0.y + rect0.height, rect1.y + rect1.height) - leftY;
                return new Rectangle(leftX, leftY, newW, newH);
                // const x0: number = rect0.x + rect0.width;
                // const x1: number = rect1.x + rect1.width;
                // const y0: number = rect0.y + rect0.height;
                // const y1: number = rect1.y + rect1.height;
                // const maxX: number = Math.max(rect0.x, rect1.x, x0, x1);
                // const minX: number = Math.min(rect0.x, rect1.x, x0, x1);
                // const maxY: number = Math.max(rect0.y, rect1.y, y0, y1);
                // const minY: number = Math.min(rect0.y, rect1.y, y0, y1);
                // return new Rectangle(minX, minY, maxX - minX, maxY - minY);
            };
            /**
             * 按指定量增加 Rectangle 对象的大小（以像素为单位）。
             * @param dx
             * @param dy
             */
            RectangleUtil.inflate = function (rect0, dx, dy) {
                rect0.x -= dx;
                rect0.width += 2 * dx;
                rect0.y -= dy;
                rect0.height += 2 * dy;
            };
            RectangleUtil.containsPoint = function (rect, point) {
                return rect.contains(point.x, point.y);
            };
            /**
             * 确定在 toIntersect 参数中指定的对象是否与此 Rectangle 对象相交。
             * 此方法检查指定的 Rectangle 对象的 x、y、width 和 height 属性，以查看它是否与此 Rectangle 对象相交。
             * @param toIntersect Rectangle
             * @param notEdge 设置只挨着边的不算相交(默认算相交)
             * @returns {boolean}
             */
            RectangleUtil.intersects = function (rect0, rect1, notEdge) {
                if (notEdge) {
                    return !(rect1.left >= rect0.right ||
                        rect1.right <= rect0.left ||
                        rect1.top >= rect0.bottom ||
                        rect1.bottom <= rect0.top);
                }
                else {
                    return !(rect1.left > rect0.right ||
                        rect1.right < rect0.left ||
                        rect1.top > rect0.bottom ||
                        rect1.bottom < rect0.top);
                }
            };
            /**
             * 如果在 toIntersect 参数中指定的 Rectangle 对象与此 Rectangle 对象相交，
             * 则返回交集区域作为 Rectangle 对象。
             * 如果矩形不相交，则此方法返回一个空的 Rectangle 对象，其属性设置为 0。
             * @param toIntersect  Rectangle
             * @param notEdge 设置只挨着边的不算相交(默认算相交)
             * @returns {Rectangle}
             */
            RectangleUtil.intersection = function (rect0, rect1, notEdge) {
                var rect = new Rectangle();
                if (RectangleUtil.intersects(rect0, rect1, notEdge)) {
                    if (rect1.left <= rect0.right) {
                        rect.x = rect1.left;
                        rect.width = rect0.right - rect.x;
                    }
                    else {
                        rect.x = rect0.left;
                        rect.width = rect1.right - rect.x;
                    }
                    rect.y = (rect1.top < rect0.top) ? rect0.top : rect1.top;
                    rect.height = (rect1.bottom < rect0.bottom) ? rect1.bottom : rect0.bottom;
                    rect.height = rect.height - rect.y;
                }
                return rect;
            };
            return RectangleUtil;
        }());
        elec.RectangleUtil = RectangleUtil;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
