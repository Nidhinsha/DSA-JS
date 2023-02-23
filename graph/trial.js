class Trail{
    constructor(){
        this.adjList = {}
    }
    addVertex(vertex){
        if (!this.adjList[vertex]) {
            this.addVertex[vertex] = new Set()
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
        let visited = new Map()
        let stack = [startingNode]
        visited.set(startingNode)
        let result = []
        while (stack.length != 0) {
            let current = stack.pop()
            result.push(current)
            for (const edge of this.adjList[current]) {
                
                if (!visited.has(edge)) {
                    visited.set(edge)
                    stack.push(edge)
                }
            }
        }
    }
    bfs(startingNode){
        let visited = new Map()
        let queue = []
        visited.set(startingNode)
        queue.push(startingNode)

        while (queue.length) {
            let current = queue.shift()
            console.log(current);
            for (const edge of this.adjList[current]) {
                if (!visited.has(edge)) {
                    visited.set(edge)
                    queue.push(edge)
                }
            }
            
        }
    }
}