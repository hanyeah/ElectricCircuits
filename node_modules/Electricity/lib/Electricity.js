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
 * Created by hanyeah on 2019/8/12.
 */
var hanyeah;
(function (hanyeah) {
    var electricity;
    (function (electricity) {
        var HObject = /** @class */ (function () {
            function HObject() {
                this.UID = HObject.TIME + (HObject.COUNTING++);
            }
            HObject.prototype.destroy = function () {
                //
            };
            HObject.COUNTING = 1;
            HObject.TIME = 0; // new Date().getTime();
            return HObject;
        }());
        electricity.HObject = HObject;
    })(electricity = hanyeah.electricity || (hanyeah.electricity = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/8/30.
 */
var hanyeah;
(function (hanyeah) {
    var dataStruct;
    (function (dataStruct) {
        var ListNode = /** @class */ (function () {
            function ListNode(userData) {
                this.next = this;
                this.prev = this;
                this.userData = userData;
            }
            ListNode.prototype.destroy = function () {
                this.next = null;
                this.prev = null;
                this.userData = null;
            };
            ListNode.prototype.connect = function (node) {
                var next1 = this.next;
                var next2 = node.next;
                this.next = next2;
                next2.prev = this;
                node.next = next1;
                next1.prev = node;
            };
            ListNode.prototype.disConnect = function () {
                this.prev.next = this.next;
                this.next.prev = this.prev;
                this.next = this;
                this.prev = this;
            };
            return ListNode;
        }());
        dataStruct.ListNode = ListNode;
    })(dataStruct = hanyeah.dataStruct || (hanyeah.dataStruct = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/8/30.
 */
var hanyeah;
(function (hanyeah) {
    var dataStruct;
    (function (dataStruct) {
        var UnionFindSet = /** @class */ (function () {
            function UnionFindSet(userData) {
                this.index = -1;
                this._root = this;
                this.userData = userData;
            }
            Object.defineProperty(UnionFindSet.prototype, "root", {
                get: function () {
                    return this.getRoot();
                },
                set: function (_root) {
                    this._root = _root;
                },
                enumerable: true,
                configurable: true
            });
            UnionFindSet.prototype.destroy = function () {
                this._root = null;
                this.userData = null;
            };
            UnionFindSet.prototype.isRoot = function () {
                return this._root === this;
            };
            UnionFindSet.prototype.getRoot = function () {
                if (this._root._root !== this._root) {
                    var root = this._root._root;
                    while (root !== root._root) {
                        root = root._root;
                    }
                    var son = this._root;
                    var temp = void 0;
                    while (son !== root) {
                        temp = son._root;
                        son._root = root;
                        son = temp;
                    }
                    this._root = root;
                }
                return this._root;
            };
            return UnionFindSet;
        }());
        dataStruct.UnionFindSet = UnionFindSet;
    })(dataStruct = hanyeah.dataStruct || (hanyeah.dataStruct = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/8/30.
 */
var hanyeah;
(function (hanyeah) {
    var dataStruct;
    (function (dataStruct) {
        var List = /** @class */ (function () {
            function List() {
                this.changed = false;
                this.nodes = [];
                this.userDatas = [];
                this.guard = new dataStruct.ListNode(null);
            }
            List.prototype.destroy = function () {
                this.guard = null;
                this.nodes = null;
                this.userDatas = null;
            };
            List.prototype.add = function (node) {
                this.changed = true;
                this.guard.connect(node);
            };
            List.prototype.remove = function (node) {
                this.changed = true;
                node.disConnect();
            };
            List.prototype.getAll = function () {
                this.updateAry();
                return this.nodes;
            };
            List.prototype.getAllUserData = function () {
                this.updateAry();
                return this.userDatas;
            };
            List.prototype.updateAry = function () {
                if (this.changed) {
                    this.changed = false;
                    this.nodes = [];
                    this.userDatas = [];
                    var node = this.guard.prev;
                    while (node !== this.guard) {
                        this.nodes.push(node);
                        this.userDatas.push(node.userData);
                        node = node.prev;
                    }
                }
            };
            return List;
        }());
        dataStruct.List = List;
    })(dataStruct = hanyeah.dataStruct || (hanyeah.dataStruct = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/8/30.
 */
var hanyeah;
(function (hanyeah) {
    var electricity;
    (function (electricity) {
        var elecData;
        (function (elecData) {
            var ListNode = hanyeah.dataStruct.ListNode;
            var Edge = /** @class */ (function (_super) {
                __extends(Edge, _super);
                function Edge(world, vertex0, vertex1) {
                    var _this = _super.call(this) || this;
                    _this._SI = 0;
                    _this._SU = 0;
                    _this._R = 0;
                    _this._U = 0;
                    _this._I = 0;
                    _this._L = 0;
                    _this._C = 0;
                    _this._isBreak = false;
                    _this.worldLN = new ListNode(_this);
                    _this.world = world;
                    world.addEdge(_this);
                    _this.vertex0 = vertex0 || new elecData.Vertex(world);
                    _this.vertex1 = vertex1 || new elecData.Vertex(world);
                    return _this;
                }
                Edge.prototype.destroy = function () {
                    this.world.removeEdge(this);
                    this.world = null;
                    this.worldLN.destroy();
                    this.worldLN = null;
                    this.vertex0 = null;
                    this.vertex1 = null;
                };
                Object.defineProperty(Edge.prototype, "SU", {
                    get: function () {
                        return this._SU;
                    },
                    set: function (value) {
                        if (this._SU !== value) {
                            this._SU = value;
                            this.world.dirty = true;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Edge.prototype, "SI", {
                    get: function () {
                        return this._SI;
                    },
                    set: function (value) {
                        if (this._SI !== value) {
                            this._SI = value;
                            this.world.dirty = true;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Edge.prototype, "U", {
                    get: function () {
                        return this._U;
                    },
                    set: function (value) {
                        if (this._U !== value) {
                            this._U = value;
                            this.world.dirty = true;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Edge.prototype, "I", {
                    get: function () {
                        return this._I;
                    },
                    set: function (value) {
                        if (this._I !== value) {
                            this._I = value;
                            this.world.dirty = true;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Edge.prototype, "R", {
                    get: function () {
                        return this._R;
                    },
                    set: function (value) {
                        if (this._R !== value) {
                            this._R = value;
                            this.world.dirty = true;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Edge.prototype, "L", {
                    get: function () {
                        return this._L;
                    },
                    set: function (value) {
                        if (this._L !== value) {
                            this._L = value;
                            this.world.dirty = true;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Edge.prototype, "C", {
                    get: function () {
                        return this._C;
                    },
                    set: function (value) {
                        if (this._C !== value) {
                            this._C = value;
                            this.world.dirty = true;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Edge.prototype, "isBreak", {
                    get: function () {
                        return this._isBreak;
                    },
                    set: function (value) {
                        if (this._isBreak !== value) {
                            this._isBreak = value;
                            this.world.dirty = true;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                return Edge;
            }(electricity.HObject));
            elecData.Edge = Edge;
        })(elecData = electricity.elecData || (electricity.elecData = {}));
    })(electricity = hanyeah.electricity || (hanyeah.electricity = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/8/30.
 */
var hanyeah;
(function (hanyeah) {
    var electricity;
    (function (electricity) {
        var elecData;
        (function (elecData) {
            var Graph = /** @class */ (function (_super) {
                __extends(Graph, _super);
                function Graph() {
                    var _this = _super.call(this) || this;
                    _this.edges = [];
                    _this.vertexs = [];
                    _this.vn = 0;
                    return _this;
                }
                return Graph;
            }(electricity.HObject));
            elecData.Graph = Graph;
        })(elecData = electricity.elecData || (electricity.elecData = {}));
    })(electricity = hanyeah.electricity || (hanyeah.electricity = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/8/30.
 */
var hanyeah;
(function (hanyeah) {
    var electricity;
    (function (electricity) {
        var elecData;
        (function (elecData) {
            var ListNode = hanyeah.dataStruct.ListNode;
            var UnionFindSet = hanyeah.dataStruct.UnionFindSet;
            var Vertex = /** @class */ (function (_super) {
                __extends(Vertex, _super);
                function Vertex(world) {
                    var _this = _super.call(this) || this;
                    _this.U = 0;
                    _this.connLN = new ListNode(_this);
                    _this.connUFS = new UnionFindSet(_this);
                    _this.worldLN = new ListNode(_this);
                    _this.graphUFS = new UnionFindSet(_this);
                    _this.world = world;
                    world.addVertex(_this);
                    return _this;
                }
                Vertex.prototype.destroy = function () {
                    this.world.removeVertex(this);
                    this.world = null;
                    this.disConnect();
                    this.connLN.destroy();
                    this.connLN = null;
                    this.connUFS.destroy();
                    this.connUFS = null;
                    this.graphUFS.destroy();
                    this.graphUFS = null;
                    this.worldLN.destroy();
                    this.worldLN = null;
                };
                Vertex.prototype.connect = function (vertex) {
                    if (this.connUFS.root !== vertex.connUFS.root) {
                        this.connLN.connect(vertex.connLN);
                        this.connUFS.root.root = vertex.connUFS.root;
                    }
                };
                Vertex.prototype.disConnect = function () {
                    if (this.connUFS.isRoot()) {
                        var next = this.connLN.next;
                        var newRoot = next.userData.connUFS;
                        while (next !== this.connLN) {
                            next.userData.connUFS.root = newRoot;
                            next = next.next;
                        }
                    }
                    this.connLN.disConnect();
                };
                return Vertex;
            }(electricity.HObject));
            elecData.Vertex = Vertex;
        })(elecData = electricity.elecData || (electricity.elecData = {}));
    })(electricity = hanyeah.electricity || (hanyeah.electricity = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/8/30.
 */
/// <reference path="./../node_modules/MatrixMath/lib/MatrixMath.d.ts" />
var hanyeah;
(function (hanyeah) {
    var electricity;
    (function (electricity) {
        var Graph = hanyeah.electricity.elecData.Graph;
        var MatrixMath = hanyeah.MatrixMath;
        var Calculater = /** @class */ (function () {
            function Calculater() {
                this.traceFlag = false;
            }
            Calculater.prototype.calculate = function (edges, vertexs) {
                var en = edges.length;
                var vn = vertexs.length;
                var edge;
                var vertex;
                // 初始化回路图并查集。
                for (var i = 0; i < vn; i++) {
                    vertex = vertexs[i];
                    vertex.graphUFS.root = vertex.connUFS.root.userData.graphUFS;
                    vertex.graphUFS.index = -1;
                    vertex.connUFS.index = -1;
                    vertex.U = 0;
                }
                // 回路并查
                for (var i = 0; i < en; i++) {
                    edge = edges[i];
                    edge.U = 0;
                    edge.I = 0;
                    if (edge.isBreak) {
                        continue;
                    }
                    if (edge.vertex0.graphUFS.root !== edge.vertex1.graphUFS.root) {
                        edge.vertex0.graphUFS.root.root = edge.vertex1.graphUFS.root;
                    }
                }
                // 按回路分到不同的图
                var graphs = [];
                var graph;
                var graphUFS;
                var n = 0;
                for (var i = 0; i < en; i++) {
                    edge = edges[i];
                    if (edge.isBreak) {
                        continue;
                    }
                    graphUFS = edge.vertex0.graphUFS.root;
                    if (graphUFS.index === -1) {
                        graph = new Graph();
                        graphs.push(graph);
                        graphUFS.index = n;
                        n++;
                    }
                    else {
                        graph = graphs[graphUFS.index];
                    }
                    graph.edges.push(edge);
                }
                for (var i = 0; i < vn; i++) {
                    vertex = vertexs[i];
                    if (vertex.connUFS.root.index === -1) {
                        if (vertex.graphUFS.root.index !== -1) {
                            graph = graphs[vertex.graphUFS.root.index];
                            graph.vertexs.push(vertex.connUFS.root.userData);
                            vertex.connUFS.root.index = graph.vn;
                            graph.vn++;
                        }
                    }
                }
                // 计算
                for (var i = 0; i < n; i++) {
                    this.solveGraph(graphs[i]);
                }
                for (var i = 0; i < vn; i++) {
                    vertex = vertexs[i];
                    vertex.U = vertex.connUFS.root.userData.U;
                }
            };
            Calculater.prototype.solveGraph = function (graph) {
                var vertexs = graph.vertexs;
                var edges = graph.edges;
                var rows = vertexs.length - 1;
                var cols = edges.length;
                var edge;
                var n0 = rows + cols;
                var n = n0 + cols;
                var M = new MatrixMath(n, n);
                var Y = new MatrixMath(n, 1);
                var r0;
                var r1;
                var ri;
                var ni;
                for (var i = 0; i < cols; i++) {
                    edge = edges[i];
                    r0 = edge.vertex0.connUFS.root.index;
                    r1 = edge.vertex1.connUFS.root.index;
                    ri = rows + i;
                    ni = n0 + i;
                    // A
                    M.setElement(r0, ni, 1);
                    M.setElement(r1, ni, -1);
                    // -AT
                    M.setElement(ri, r0, -1);
                    M.setElement(ri, r1, 1);
                    // I
                    M.setElement(ri, ri, 1);
                    // F
                    if (edge.SU) {
                        M.setElement(ni, ri, 1);
                        M.setElement(ni, ni, 0);
                    }
                    else if (edge.SI) {
                        M.setElement(ni, ri, 0);
                        M.setElement(ni, ni, 1);
                    }
                    else if (edge.R === 0) {
                        M.setElement(ni, ri, -1);
                        M.setElement(ni, ni, edge.R);
                    }
                    else {
                        M.setElement(ni, ri, 1 / edge.R);
                        M.setElement(ni, ni, -1);
                    }
                    // Us + Is
                    Y.setElement(ni, 0, edge.SU + edge.SI);
                }
                var X = MatrixMath.GaussSolution(M, Y);
                // 给边和节点设置计算好的电流电压。
                var vertex;
                for (var i = 0; i <= rows; i++) {
                    vertex = vertexs[i];
                    vertex.U = X.getElement(vertex.connUFS.index, 0);
                }
                for (var i = 0; i < cols; i++) {
                    edge = edges[i];
                    edge.U = X.getElement(rows + i, 0);
                    edge.I = X.getElement(n0 + i, 0);
                }
                if (this.traceFlag) {
                    console.log("M:");
                    MatrixMath.traceMatrix(M);
                    console.log("Y:");
                    MatrixMath.traceMatrix(Y);
                    console.log("x:");
                    MatrixMath.traceMatrix(X);
                }
            };
            return Calculater;
        }());
        electricity.Calculater = Calculater;
    })(electricity = hanyeah.electricity || (hanyeah.electricity = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/8/30.
 */
var hanyeah;
(function (hanyeah) {
    var electricity;
    (function (electricity) {
        var List = hanyeah.dataStruct.List;
        var World = /** @class */ (function (_super) {
            __extends(World, _super);
            function World() {
                var _this = _super.call(this) || this;
                _this.calculater = new electricity.Calculater();
                _this.dirty = true;
                _this.vertexList = new List();
                _this.edgeList = new List();
                return _this;
            }
            World.prototype.destroy = function () {
                this.vertexList.destroy();
                this.vertexList = null;
                this.edgeList.destroy();
                this.edgeList = null;
                this.calculater = null;
            };
            World.prototype.addVertex = function (vertex) {
                this.vertexList.add(vertex.worldLN);
                this.dirty = true;
            };
            World.prototype.removeVertex = function (vertex) {
                this.vertexList.remove(vertex.worldLN);
                this.dirty = true;
            };
            World.prototype.addEdge = function (edge) {
                this.edgeList.add(edge.worldLN);
                this.dirty = true;
            };
            World.prototype.removeEdge = function (edge) {
                this.edgeList.remove(edge.worldLN);
                this.dirty = true;
            };
            World.prototype.getVertexs = function () {
                return this.vertexList.getAllUserData();
            };
            World.prototype.getEdges = function () {
                return this.edgeList.getAllUserData();
            };
            World.prototype.calculate = function () {
                if (this.dirty) {
                    this.calculater.calculate(this.getEdges(), this.getVertexs());
                    this.dirty = false;
                }
            };
            return World;
        }(electricity.HObject));
        electricity.World = World;
    })(electricity = hanyeah.electricity || (hanyeah.electricity = {}));
})(hanyeah || (hanyeah = {}));
/**
 * Created by hanyeah on 2019/8/30.
 */
var hanyeah;
(function (hanyeah) {
    var electricity;
    (function (electricity) {
        var examples;
        (function (examples) {
            var Edge = hanyeah.electricity.elecData.Edge;
            var Example01 = /** @class */ (function () {
                function Example01() {
                    var world = new electricity.World();
                    var arr = [];
                    for (var i = 0; i < 4; i++) {
                        var edge = new Edge(world, null, null);
                        edge.R = 2;
                        arr.push(edge);
                    }
                    arr[0].vertex0.connect(arr[1].vertex0);
                    arr[0].vertex1.connect(arr[1].vertex1);
                    arr[0].vertex0.connect(arr[2].vertex1);
                    arr[0].vertex1.connect(arr[3].vertex0);
                    arr[3].vertex1.connect(arr[2].vertex0);
                    arr[3].SU = 6;
                    arr[3].R = 0;
                    test1();
                    function test1() {
                        console.time("用时");
                        world.calculate();
                        console.timeEnd("用时");
                        traceUI();
                    }
                    // test2();
                    // function test2() {
                    //   console.time("用时");
                    //   for (let i = 0; i < 100000; i++) {
                    //     world.calculate();
                    //   }
                    //   console.timeEnd("用时");
                    // }
                    function traceUI() {
                        for (var i = 0; i < arr.length; i++) {
                            console.log([i + ":",
                                arr[i].U.toPrecision(2),
                                arr[i].I.toPrecision(2),
                                arr[i].vertex0.U.toPrecision(2),
                                arr[i].vertex1.U.toPrecision(2)
                            ].join("\t"));
                        }
                    }
                }
                return Example01;
            }());
            examples.Example01 = Example01;
        })(examples = electricity.examples || (electricity.examples = {}));
    })(electricity = hanyeah.electricity || (hanyeah.electricity = {}));
})(hanyeah || (hanyeah = {}));
