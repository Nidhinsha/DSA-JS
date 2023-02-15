class Graph7{
    constructor(){
        this.adjList = {}
    }
    addVertex(vertex){
        if (!this.adjList[vertex]) {
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
       return (
        this.adjList[vertex1].has(vertex2) && 
        this.adjList[vertex2].has(vertex1)  

       )
    }
    removeEdge(vertex1,vertex2){
        this.adjList[vertex1].delete(vertex2)
        this.adjList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if (!this.adjList[vertex]) {
            return
        }
        for (const adjVertex of this.adjList[vertex]) {
            this.removeEdge(vertex,adjVertex)

        }
        delete this.adjList[vertex]
    }
    display(){
        for (const vertex in this.adjList) {
            console.log(vertex + "->" + [...this.adjList[vertex]]);
        }
    }
}
const graph7 = new Graph7()
graph7.addVertex('A')
graph7.addVertex('B')
graph7.addVertex('C')

// edges means the connection 
graph7.addEdge('A', 'B')
graph7.addEdge('B', 'C')

// display
graph7.display()
graph7 .removeEdge("A","B")
graph7.display()
// checking the vertex has connection with given arg
console.log(graph7.hasEdge("A","C"));