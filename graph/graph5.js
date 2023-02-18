class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = new Set();
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList[vertex2]) {
        this.addVertex(vertex2);
      }
      this.adjacencyList[vertex1].add(vertex2);
      this.adjacencyList[vertex2].add(vertex1);
    }
  
    display() {
      for (let vertex in this.adjacencyList) {
        console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
      }
    }
  
    hasEdge(vertex1, vertex2) {
      return (
        this.adjacencyList[vertex1].has(vertex2) &&
        this.adjacencyList[vertex2].has(vertex1)
      );
    }
  
    removeEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].delete(vertex2);
      this.adjacencyList[vertex2].delete(vertex1);
    }
  
    removeVertex(vertex) {
      if (!this.adjacencyList[vertex]) return;
      for (let adjacencyVertex of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, adjacencyVertex);
      }
      delete this.adjacencyList[vertex];
    }
  
    bfs(vertex) {
      let visited = {};
      let queue = [];
      visited[vertex] = true;
      queue.push(vertex);
      while (queue.length) {
        let ver = queue.shift();
        let value = this.adjacencyList[ver];
        value.forEach((element) => {
          if (!visited[element]) {
            visited[element] = true;
            queue.push(element);
          }
        });
      }
      return Object.keys(visited);
    }
  
    dfs(vertex) {
      let visited = {};
      visited[vertex] = true;
      this.depthSearch(
        vertex,
        ((this.adjacencyList = this.adjacencyList), visited)
      );
      return visited;
    }
  
    depthSearch(vertex, adjacencyList, visited) {
      let value = adjacencyList[vertex]
    }
  }
  const myGraph6 = new Graph()
myGraph6.addVertex(1)
myGraph6.addVertex(2)
myGraph6.addVertex(3)
myGraph6.addVertex(4)
myGraph6.addVertex(5)
// myGraph6.addVertex(3)

// myGraph6.addEdge("A","C")
myGraph6.addEdge(1, 2);
myGraph6.addEdge(1, 3);
myGraph6.addEdge(2, 4);
myGraph6.addEdge(2, 5);
// console.log("BFS Traversal:");
// console.log(myGraph6.bfs(1));
console.log(myGraph6.dfs(1));