class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.adjacencyList(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.adjacencyList(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    // to remove connection
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    // to remove the connection
    removeVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            return 
        }
        for (const adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
        )
    }
    display() {
        for (const vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
    }
}
const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

// edges means the connection 
graph.addEdge('A', 'B')
graph.addEdge('B', 'C')

// display
graph.display()

// checking the vertex has connection with given arg
console.log(graph.hasEdge("A","C"));
// to remove connection b/w vertex
// graph.removeEdge("A","B")
// calling it again to check the result
// graph.display()
// deleting vertex
graph.removeVertex('B')
graph.display()