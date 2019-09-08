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
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var base;
        (function (base) {
            var EqBase = /** @class */ (function (_super) {
                __extends(EqBase, _super);
                function EqBase() {
                    var _this = _super.call(this) || this;
                    _this.initSkin();
                    return _this;
                }
                EqBase.prototype.initSkin = function () {
                };
                return EqBase;
            }(PIXI.Container));
            base.EqBase = EqBase;
        })(base = elec.base || (elec.base = {}));
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var base;
        (function (base) {
            var ElecEq = /** @class */ (function (_super) {
                __extends(ElecEq, _super);
                function ElecEq() {
                    var _this = _super.call(this) || this;
                    _this.U = 0;
                    _this.I = 0;
                    _this.R = 0;
                    return _this;
                }
                return ElecEq;
            }(base.EqBase));
            base.ElecEq = ElecEq;
        })(base = elec.base || (elec.base = {}));
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var base;
        (function (base) {
            var VoltageSource = /** @class */ (function (_super) {
                __extends(VoltageSource, _super);
                function VoltageSource() {
                    var _this = _super.call(this) || this;
                    _this.SU = 0;
                    return _this;
                }
                return VoltageSource;
            }(base.ElecEq));
            base.VoltageSource = VoltageSource;
        })(base = elec.base || (elec.base = {}));
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var eqs;
        (function (eqs) {
            var VoltageSource = hanyeah.elec.base.VoltageSource;
            var Battery = /** @class */ (function (_super) {
                __extends(Battery, _super);
                function Battery() {
                    return _super.call(this) || this;
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
            }(VoltageSource));
            eqs.Battery = Battery;
        })(eqs = elec.eqs || (elec.eqs = {}));
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var eqs;
        (function (eqs) {
            var ElecEq = hanyeah.elec.base.ElecEq;
            var Resistance = /** @class */ (function (_super) {
                __extends(Resistance, _super);
                function Resistance() {
                    return _super.call(this) || this;
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
            }(ElecEq));
            eqs.Resistance = Resistance;
        })(eqs = elec.eqs || (elec.eqs = {}));
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var Battery = hanyeah.elec.eqs.Battery;
        var Resistance = hanyeah.elec.eqs.Resistance;
        var ElectricCircuits = /** @class */ (function () {
            function ElectricCircuits(canvas) {
                console.log("ElectricCircuits");
                var app = new PIXI.Application({ view: canvas, transparent: true });
                console.log(app);
                console.log(app.stage);
                this.eqLayer = new PIXI.Container();
                app.stage.addChild(this.eqLayer);
                var battery = new Battery();
                this.eqLayer.addChild(battery);
                battery.x = 500;
                battery.y = 300;
                var resistance = new Resistance();
                this.eqLayer.addChild(resistance);
                resistance.x = 200;
                resistance.y = 300;
            }
            return ElectricCircuits;
        }());
        elec.ElectricCircuits = ElectricCircuits;
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var eqs;
        (function (eqs) {
            var ElecEq = hanyeah.elec.base.ElecEq;
            var SingleSwitch = /** @class */ (function (_super) {
                __extends(SingleSwitch, _super);
                function SingleSwitch() {
                    return _super.call(this) || this;
                }
                return SingleSwitch;
            }(ElecEq));
            eqs.SingleSwitch = SingleSwitch;
        })(eqs = elec.eqs || (elec.eqs = {}));
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var elec;
    (function (elec) {
        var eqs;
        (function (eqs) {
            var Wire = /** @class */ (function (_super) {
                __extends(Wire, _super);
                function Wire() {
                    return _super.call(this) || this;
                }
                return Wire;
            }(eqs.Resistance));
            eqs.Wire = Wire;
        })(eqs = elec.eqs || (elec.eqs = {}));
    })(elec = hanyeah.elec || (hanyeah.elec = {}));
})(hanyeah || (hanyeah = {}));
