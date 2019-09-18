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
            return EqBase;
        }(elec.Container));
        elec.EqBase = EqBase;
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
        var PluginBase = /** @class */ (function (_super) {
            __extends(PluginBase, _super);
            function PluginBase(main) {
                var _this = _super.call(this) || this;
                _this.main = main;
                return _this;
            }
            PluginBase.prototype.destroy = function () {
                this.main = null;
            };
            return PluginBase;
        }(elec.HObject));
        elec.PluginBase = PluginBase;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var ElecMain = /** @class */ (function (_super) {
            __extends(ElecMain, _super);
            function ElecMain(canvas) {
                var _this = _super.call(this) || this;
                _this.selects = [];
                console.log("ElecMain");
                var app = new PIXI.Application({ view: canvas, transparent: true });
                console.log(app);
                console.log(app.stage);
                _this.stage = app.stage;
                _this.stage.interactive = true;
                _this.stage.hitArea = new StageHitArea();
                _this.viewStack = new elec.ViewStack(_this);
                _this.stage.addChild(_this.viewStack);
                var battery = new elec.Battery(_this);
                _this.viewStack.eqLayer.addChild(battery);
                battery.x = 500;
                battery.y = 300;
                var resistance = new elec.Resistance(_this);
                _this.viewStack.eqLayer.addChild(resistance);
                resistance.x = 200;
                resistance.y = 300;
                console.log(battery);
                // init ticker
                _this.ticker = app.ticker;
                _this.startTicker();
                _this.ticker.add(_this.update, _this);
                // init plugin
                _this.selectPlugin = new elec.SelectPlugin(_this);
                _this.dragPlugin = new elec.DragPlugin(_this);
                _this.roamPlugin = new elec.RoamPlugin(_this);
                _this.resized();
                return _this;
            }
            ElecMain.prototype.destroy = function () {
                this.selectPlugin.destroy();
                this.dragPlugin.destroy();
                this.roamPlugin.destroy();
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
            ElecMain.prototype.moveSelectBy = function (dx, dy) {
                for (var i = 0; i < this.selects.length; i++) {
                    this.selects[i].moveBy(dx, dy);
                }
            };
            ElecMain.prototype.moveStageBy = function (dx, dy) {
                this.viewStack.x += dx;
                this.viewStack.y += dy;
            };
            return ElecMain;
        }(elec.HObject));
        elec.ElecMain = ElecMain;
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
                _this.mouseDownHandler = function (e) {
                    if (e.target instanceof elec.EqBase) {
                        _this.map[e.data.identifier] = new DragItem(e.target, e.data.identifier, _this.main.viewStack.eqLayer.toLocal(e.data.global));
                    }
                };
                _this.mouseMoveHandler = function (e) {
                    var dragItem = _this.map[e.data.identifier];
                    if (dragItem) {
                        if (!dragItem.eq.isSelect) {
                            _this.main.select([dragItem.eq], e.data.originalEvent.ctrlKey);
                        }
                        var p = _this.main.viewStack.eqLayer.toLocal(e.data.global);
                        _this.main.moveSelectBy(p.x - dragItem.p.x, p.y - dragItem.p.y);
                        dragItem.p = p;
                        dragItem.moved = true;
                    }
                };
                _this.mouseUpHandler = function (e) {
                    if (_this.map[e.data.identifier]) {
                        var dragItem = _this.map[e.data.identifier];
                        if (dragItem.moved) {
                            e.stopPropagation();
                        }
                        delete _this.map[e.data.identifier];
                    }
                };
                _this.main.viewStack.eqLayer.addListener("pointerdown", _this.mouseDownHandler);
                _this.main.stage.addListener("pointermove", _this.mouseMoveHandler);
                _this.main.stage.addListener("pointerup", _this.mouseUpHandler);
                _this.main.stage.addListener("pointerupoutside", _this.mouseUpHandler);
                return _this;
            }
            DragPlugin.prototype.destroy = function () {
                this.main.viewStack.eqLayer.removeListener("pointerdown", this.mouseDownHandler);
                this.main.stage.removeListener("pointermove", this.mouseMoveHandler);
                this.main.stage.removeListener("pointerup", this.mouseUpHandler);
                this.main.stage.removeListener("pointerupoutside", this.mouseUpHandler);
                this.map = null;
                _super.prototype.destroy.call(this);
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
                _this.mouseDownHandler = function (e) {
                    if (e.target === _this.main.stage) {
                        _this.map[e.data.identifier] = e.data.global.clone();
                    }
                };
                _this.mouseMoveHandler = function (e) {
                    var lp = _this.map[e.data.identifier];
                    if (lp) {
                        var p = e.data.global;
                        _this.main.moveStageBy(p.x - lp.x, p.y - lp.y);
                        lp.x = p.x;
                        lp.y = p.y;
                    }
                };
                _this.mouseUpHandler = function (e) {
                    if (_this.map[e.data.identifier]) {
                        delete _this.map[e.data.identifier];
                    }
                };
                _this.main.stage.addListener("pointerdown", _this.mouseDownHandler);
                _this.main.stage.addListener("pointermove", _this.mouseMoveHandler);
                _this.main.stage.addListener("pointerup", _this.mouseUpHandler);
                _this.main.stage.addListener("pointerupoutside", _this.mouseUpHandler);
                return _this;
            }
            RoamPlugin.prototype.destroy = function () {
                this.main.stage.removeListener("pointerdown", this.mouseDownHandler);
                this.main.stage.removeListener("pointermove", this.mouseMoveHandler);
                this.main.stage.removeListener("pointerup", this.mouseUpHandler);
                this.main.stage.removeListener("pointerupoutside", this.mouseUpHandler);
                _super.prototype.destroy.call(this);
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
        var SelectPlugin = /** @class */ (function (_super) {
            __extends(SelectPlugin, _super);
            function SelectPlugin(main) {
                var _this = _super.call(this, main) || this;
                _this.stageClickHandler = function (e) {
                    if (e.target instanceof elec.EqBase) {
                        _this.main.select([e.target], e.data.originalEvent.ctrlKey);
                    }
                    else {
                        _this.main.select([], false);
                    }
                };
                _this.main.stage.addListener("pointertap", _this.stageClickHandler);
                return _this;
            }
            SelectPlugin.prototype.destroy = function () {
                this.main.stage.removeListener("pointertap", this.stageClickHandler);
                _super.prototype.destroy.call(this);
            };
            return SelectPlugin;
        }(elec.PluginBase));
        elec.SelectPlugin = SelectPlugin;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
