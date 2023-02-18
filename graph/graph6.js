class graph6{
    constructor(){
        this.adjencyList = {}
    }
    addVertex(vertex){
        if (!this.adjencyList[vertex]) {
            this.adjencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if (!this.adjencyList[vertex1]) {
            this.adjencyList[vertex1]
        }
        if (!this.adjencyList[vertex2]) {
            this.adjencyList[vertex2]
        }
        this.adjencyList[vertex1].add(vertex2)
        this.adjencyList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return(
            this.adjencyList[vertex1].has(vertex2) &&
            this.adjencyList[vertex2].has(vertex1)
        )
    }
    display(){
        for (const vertex in this.adjencyList) {
            console.log(vertex+" "+[...this.adjencyList[vertex]]);
        }
    }
    bfs(startingNode){
       const visited = new Map()
       const stack = [startingNode]
       const resulst = []
       visited.set(startingNode)
    }
}
const myGraph6 = new graph6()
myGraph6.addVertex("A")
myGraph6.addVertex("B")
myGraph6.addVertex("C")

myGraph6.addEdge("A","C")
// myGraph6.display()
console.log(myGraph6.bfs("A"));