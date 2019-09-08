/**
 * Created by hanyeah on 2019/8/12.
 */
declare namespace hanyeah.electricity {
    class HObject {
        private static COUNTING;
        private static TIME;
        UID: number;
        constructor();
        destroy(): void;
    }
}
/**
 * Created by hanyeah on 2019/8/30.
 */
declare namespace hanyeah.dataStruct {
    class ListNode {
        next: ListNode;
        prev: ListNode;
        userData: object;
        constructor(userData: any);
        destroy(): void;
        connect(node: ListNode): void;
        disConnect(): void;
    }
}
/**
 * Created by hanyeah on 2019/8/30.
 */
declare namespace hanyeah.dataStruct {
    class UnionFindSet {
        root: UnionFindSet;
        userData: object;
        index: number;
        private _root;
        constructor(userData: any);
        destroy(): void;
        isRoot(): boolean;
        private getRoot;
    }
}
/**
 * Created by hanyeah on 2019/8/30.
 */
declare namespace hanyeah.dataStruct {
    class List {
        private guard;
        private changed;
        private nodes;
        private userDatas;
        constructor();
        destroy(): void;
        add(node: ListNode): void;
        remove(node: ListNode): void;
        getAll(): ListNode[];
        getAllUserData(): object[];
        private updateAry;
    }
}
/**
 * Created by hanyeah on 2019/8/30.
 */
declare namespace hanyeah.electricity.elecData {
    import ListNode = hanyeah.dataStruct.ListNode;
    class Edge extends HObject {
        SI: number;
        SU: number;
        R: number;
        U: number;
        I: number;
        isBreak: boolean;
        vertex0: Vertex;
        vertex1: Vertex;
        worldLN: ListNode;
        world: World;
        constructor(world: World, vertex0: Vertex, vertex1: Vertex);
        destroy(): void;
    }
}
/**
 * Created by hanyeah on 2019/8/30.
 */
declare namespace hanyeah.electricity.elecData {
    class Graph extends HObject {
        edges: Edge[];
        vertexs: Vertex[];
        vn: number;
        constructor();
    }
}
/**
 * Created by hanyeah on 2019/8/30.
 */
declare namespace hanyeah.electricity.elecData {
    import ListNode = hanyeah.dataStruct.ListNode;
    import UnionFindSet = hanyeah.dataStruct.UnionFindSet;
    class Vertex extends HObject {
        U: number;
        connLN: ListNode;
        connUFS: UnionFindSet;
        worldLN: ListNode;
        graphUFS: UnionFindSet;
        world: World;
        constructor(world: World);
        destroy(): void;
        connect(vertex: Vertex): void;
        disConnect(): void;
    }
}
/**
 * Created by hanyeah on 2019/8/30.
 */
declare namespace hanyeah.electricity {
    import Edge = hanyeah.electricity.elecData.Edge;
    import Vertex = hanyeah.electricity.elecData.Vertex;
    import Graph = hanyeah.electricity.elecData.Graph;
    class Calculater {
        traceFlag: boolean;
        constructor();
        calculate(edges: Edge[], vertexs: Vertex[]): void;
        solveGraph(graph: Graph): void;
    }
}
/**
 * Created by hanyeah on 2019/8/30.
 */
declare namespace hanyeah.electricity {
    import Vertex = hanyeah.electricity.elecData.Vertex;
    import Edge = hanyeah.electricity.elecData.Edge;
    class World extends HObject {
        calculater: Calculater;
        private vertexList;
        private edgeList;
        constructor();
        destroy(): void;
        addVertex(vertex: Vertex): void;
        removeVertex(vertex: Vertex): void;
        addEdge(edge: Edge): void;
        removeEdge(edge: Edge): void;
        getVertexs(): Vertex[];
        getEdges(): Edge[];
        calculate(): void;
    }
}
/**
 * Created by hanyeah on 2019/8/30.
 */
declare namespace hanyeah.electricity.examples {
    class Example01 {
        constructor();
    }
}
