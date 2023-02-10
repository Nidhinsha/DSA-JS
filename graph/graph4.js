class graph4{
    constructor(){
        this.adjencencyList = {}
    }

    addVertex(vertex){
        if (!this.adjencencyList[vertex]) {
            this.adjencencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if (!this.adjencencyList[vertex1]) {
            this.adjencencyList(vertex1)
        }
        if (!this.adjencencyList[vertex2]) {
            this.adjencencyList(vertex2)
        }
        this.adjencencyList[vertex1].add(vertex2)
        this.adjencencyList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjencencyList[vertex1].has(vertex2)
        )
    }
    display(){
        for (const vertex in this.adjencencyList) {
            console.log(vertex+"->"+[...this.adjencencyList[vertex]]);
        }
    }
}

const grpahObj = new graph4()
grpahObj.addVertex("hi")
grpahObj.addVertex("hello")
grpahObj.addVertex("hey")

grpahObj.addEdge("hi","hello")
grpahObj.addEdge("hi","hey")
grpahObj.display()