class Graph2{
    constructor(){
        this.adjecencyList={}
    }

    addVertex(vertex){
        if (!this.adjecencyList[vertex]) {
            this.adjecencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjecencyList[vertex1]) {
            this.adjecencyList(vertex1)
        }
        if (!this.adjecencyList[vertex2]) {
            this.adjecencyList(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }
    removeEdge(vertex1,vertex2){
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if (!this.adjecencyList[vertex]) {
            return 
        }
        for (const adjecentVertex of this.adjecencyList[vertex]) {
            this.removeEdge(vertex,adjecentVertex)
        }
        delete this.adjecencyList[vertex]
    }
    hasEdge(vertex1, vertex2) {
        return (
            this.adjecencyList[vertex1].has(vertex2) && this.adjecencyList[vertex2].has(vertex1)
        )
    }
    display() {
        for (const vertex in this.adjecencyList) {
            console.log(vertex + " -> " + [...this.adjecencyList[vertex]]);
        }
    }
}

const graph2 = new Graph2()
graph2.addVertex("Messi")
graph2.addVertex("BallnDor")
graph2.addVertex("WorldCup")

graph2.addEdge("Messi","BallnDor")
graph2.addEdge("Messi","WorldCup")
graph2.display()
