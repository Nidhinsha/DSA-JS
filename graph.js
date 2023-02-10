class Graph{
    constructor(){
        this.adjecencyList = {}
    }
    addVertex(vertex){
        if (!this.adjecencyList[vertex]) {
            this.adjecencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if (!this.adjecencyList[vertex1]) {
            this.adjecencyList(vertex1)
        }
        if (!this.adjecencyList[vertex2]) {
            this.adjecencyList(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjecencyList[vertex1].has(vertex2) &&
            this.adjecencyList[vertex2].has(vertex1) 
        )
    }
    display(){
        for (const vertex in this.adjecencyList) {
            console.log(vertex + "->" + [...this.adjecencyList[vertex]]);
        }
    }
}