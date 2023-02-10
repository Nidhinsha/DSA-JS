class Graph5{
    constructor(){
        this.adjencecy={}
    }
    addVertex(vertex){
        if (!this.adjencecy[vertex]) {
            this.adjencecy[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if (!this.adjencecy[vertex1]) {
            this.adjencecy[vertex1]
        }
        if(!this.adjencecy[vertex2]){
            this.adjencecy[vertex2]
        }
        this.adjencecy[vertex1].add(vertex2)
        this.adjencecy[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return(
            this.adjencecy[vertex1].has(vertex2) && 
            this.adjencecy[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1,vertex2){
        this.adjencecy[vertex1].delete(vertex2)
        this.adjencecy[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjencecy[vertex]){
            return
        }
        for (const adjVertex of this.adjencecy[vertex]) {
            this.removeEdge(vertex,adjVertex)
        }
        delete this.adjencecy[vertex]
    }
    display(){
        for (const vertex in this.adjencecy) {
            console.log(vertex+ " - > " +[...this.adjencecy[vertex]]);
        }
    }
}

const graph = new Graph5()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

// edges means the connection 
graph.addEdge('A', 'B')
graph.addEdge('B', 'C')

// display
graph.display()