DFS(Graph G, Node start_node):
  // create a stack to keep track of visited nodes
  stack s
  // create a set to keep track of visited nodes
  set visited
  // mark the start node as visited and push it onto the stack
  visited.add(start_node)
  s.push(start_node)
  
  // loop until all nodes have been visited
  while s is not empty:
    // pop the top node from the stack
    current_node = s.pop()
    // visit the current node
    visit(current_node)
    
    // loop through all adjacent nodes of the current node
    for neighbor in G.get_neighbors(current_node):
      // if the neighbor has not been visited, mark it as visited and push it onto the stack
      if neighbor not in visited:
        visited.add(neighbor)
        s.push(neighbor)
