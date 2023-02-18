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
        this.adjacencyList(vertex1);
      }
      if (!this.adjacencyList[vertex2]) {
        this.adjacencyList(vertex2);
      }
      this.adjacencyList[vertex1].add(vertex2);
      this.adjacencyList[vertex2].add(vertex1);
    }
    // to remove connection
    removeEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].delete(vertex2);
      this.adjacencyList[vertex2].delete(vertex1);
    }
    // to remove the connection
    removeVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        return;
      }
      for (const adjacentVertex of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
    hasEdge(vertex1, vertex2) {
      return (
        this.adjacencyList[vertex1].has(vertex2) &&
        this.adjacencyList[vertex2].has(vertex1)
      );
    }
    display() {
      for (const vertex in this.adjacencyList) {
        console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
      }
    }
  
    bfs(startingNode) {
      let visited = new Map();
      let q = [];
      q.push(startingNode); 
      visited.set(startingNode);
      let ele = startingNode;
      while (q.length !== 0) {
        ele = q[0];
        for (let i of this.adjacencyList[ele]) {
          if (!visited.has(i)) {
            // console.log(i);
            q.push(i);
            visited.set(i);
          }
        }
        // console.log(q);
        console.log(q.shift());
        // console.log(q);
      }
    }
  
    dfs(startingNode) {
      const visited = new Map();
      const stack = [startingNode];
      const result = [];
      visited.set(startingNode);
      let current = null;
      while (stack.length !== 0) {
        current = stack.pop();
        result.push(current);
        for (let edge of this.adjacencyList[current]) {
          if (!visited.has(edge)) {
            visited.set(edge, edge);
            stack.push(edge);
          }
        }
      }
      return result;
    }
  }
  const graph = new Graph();
  graph.addVertex("1");
  graph.addVertex("2");
  graph.addVertex("3");
  graph.addVertex("4");
  graph.addVertex("5");
  graph.addVertex("6");
  graph.addVertex("7");
  
  // edges means the connection
  graph.addEdge("1", "2");
  graph.addEdge("1", "3");
  graph.addEdge("1", "4");
  graph.addEdge("2", "3");
  graph.addEdge("4", "3");
  graph.addEdge("5", "4");
  graph.addEdge("5", "3");
  graph.addEdge("6", "5");
  graph.addEdge("7", "5");
  
  // display
  // graph.display();
  
  // console.log(graph.hasEdge("1", "2"));
  // graph.removeVertex("1");
  // graph.display();
  
  graph.dfs("1");