export default class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    getHomeVertex() {
        return this.adjList.keys().next().value;
    }

    addEdge(v1, v2, weight) {
        this.adjList.get(v1).push({ node: v2, weight });
        this.adjList.get(v2).push({ node: v1, weight });
    }
    // not complete
    DFSUtil(vert, visited) {
        visited[vert] = true;
        console.log('vert', vert);

        const neighbours = this.adjList.get(vert);
        for (let i in neighbours) {
            const get_elem = neighbours[i];
            if (!visited[get_elem]) {
                this.DFSUtil(get_elem, visited);
            }
        }
    }
    // not complete
    depthFirstTraversal(startingNode) {
        var visited = [];
        for (var i = 0; i < this.adjList.size; i++) visited[i] = false;

        this.DFSUtil(startingNode, visited);
        return visited;
    }
    // incomplete algorigthm
    all(startingNode) {
        const neighbours = this.adjList.get(startingNode);
        const visited = {};
        const paths = [];
        visited[startingNode] = true;

        (function walk() {
            for (const neighbour in neighbours) {
                const node = neighbours[neighbour];
                console.log(node);
                visited[node] = true;
                if (!visited[node]) {
                    walk(node, visited, paths);
                }
            }
        })(neighbours, visited, paths);
    }
}
