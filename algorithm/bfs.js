BFS(Graph G, Node start_node):
  // create a queue to keep track of visited nodes
  queue q
  // create a set to keep track of visited nodes
  set visited
  // mark the start node as visited and add it to the queue
  visited.add(start_node)
  q.enqueue(start_node)
  
  // loop until all nodes have been visited
  while q is not empty:
    // dequeue the node at the front of the queue
    current_node = q.dequeue()
    // visit the current node
    visit(current_node)
    
    // loop through all adjacent nodes of the current node
    for neighbor in G.get_neighbors(current_node):
      // if the neighbor has not been visited, mark it as visited and add it to the queue
      if neighbor not in visited:
        visited.add(neighbor)
        q.enqueue(neighbor)
