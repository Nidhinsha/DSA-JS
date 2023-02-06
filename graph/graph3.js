class Graph3{
    constructor(){
        this.adjencency={}
    }
    addVertex(vertex){
        if (!this.adjencency[vertex]) {
            this.adjencency[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if (!this.adjencency[vertex1]) {
            this.adjencency(vertex1)
        }
        if (!this.adjencency[vertex2]) {
            this.adjencency(vertex2)
        }
        this.adjencency[vertex1].add(vertex2)
        this.adjencency[vertex2].add(vertex1)
    }
    removeEdge(vertex1,vertex2){
        this.adjencency[vertex1].delete(vertex2)
        this.adjencency[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if (!this.adjencency[vertex]) {
            return 
        }
        for (const adjecentVertex of this.adjencency[vertex]) {
            this.removeEdge(vertex,adjecentVertex)
        }
        delete this.adjencency[vertex]
    }
    hasEdge(vertex1,vertex2){
       return(
        this.adjencency[vertex1].has(vertex2)
       ) 
    }
    display(){
        for (const vertex in this.adjencency) {
            console.log(vertex +"->"+[...this.adjencency[vertex]]);
        }
    }
}