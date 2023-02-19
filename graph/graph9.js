class Graph9{
    constructor(){
        this.adjList = {}
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if (!this.adjList[vertex1]) {
            this.adjList(vertex1)
        }
        if (!this.adjList[vertex2]) {
            this.adjList(vertex2)
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return(
            this.adjList[vertex1].has(vertex2) &&
            this.adjList[vertex2].has(vertex1)
        )
    }
    dfs(startingNode){
        const visited = new Map()
        const stack =[startingNode]
        const result = []
        visited.set(startingNode)
        let current = null

        while (stack.length != 0) {
            current = stack.pop()
            result.push(current)
            for (const edge of this.adjList[current]) {
                if (!visited.has(edge)) {
                    visited.set(edge)
                    stack.push(edge)
                }
            }
        }
        return result
    }
    bfs(startingNode){
        let visited = new Map()
        let queue = []
        queue.push(startingNode)
        visited.set(startingNode)
        let current = startingNode
        while (queue.length != 0) {
            current = queue[0]
            for (const i of this.adjList[current]) {
                if (!visited.has(i)) {
                    queue.push(i)
                    visited.set(i)
                }
            }
            console.log(queue.shift());
        }
    }
}

const graph = new Graph9();
graph.addVertex("1");
graph.addVertex("2");
graph.addVertex("3");
graph.addVertex("4");
graph.addVertex("5");
graph.addVertex("6");
graph.addVertex("7");

// edges means the connection
graph.addEdge("1", "2");
graph.addEdge("1", "3");
graph.addEdge("1", "4");
graph.addEdge("2", "3");
graph.addEdge("4", "3");
graph.addEdge("5", "4");
graph.addEdge("5", "3");
graph.addEdge("6", "5");
graph.addEdge("7", "5");

console.log(graph.dfs("1"));
graph.bfs("1")