// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }
// class bst{
//     constructor(){
//         this.root = null
//     }
//     isEmpty(){
//         return this.root === null
//     }
//     insert(value){
//         const newNode = new Node(value)
//         if (this.isEmpty()) {
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(root,newNode){
//         if (newNode.value < root.value) {
//             if (root.left === null) {
//                 root.left = newNode
//             } else {
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if (root.right === null) {
//                 root.right = newNode
//             } else {
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }
//     preOrder(root){
//         if (root) {
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     levelOrder(){
//         let queue = []
//         queue.push(this.root)
//         while (queue.length) {
//             let current = queue.shift()
//             console.log(current.value);
//             if (current.left) {
//                 queue.push(current.left)
//             }
//             if (current.right) {
//                 queue.push(current.right)
//             }
//         }
//     }
//     treeSize(root){
//         if (!root) {
//             return 0
//         }else{
//             return 1+this.treeSize(root.left)+this.treeSize(root.right)
//         }
//     }
//     maxDepth(root){
//         if (root==null) {
//             return 0
//         } else {
//             let left = this.maxDepth(root.left)
//             let right = this.maxDepth(root.right)
//             return Math.max(left,right)+1
//         }
//     }
//     countNodeWithTwoOrMoreChildren(root){
//         if (root === null) {
//             return 0
//         }
//         let count = 0
//         if(root.left != null && root.right != null){
//             count =1
//         }
//         return count + this.countNodeWithTwoOrMoreChildren(root.left)+this.countNodeWithTwoOrMoreChildren(root.right)
//     }
//     isComplete(root){
//         if (root == null) {
//             return true
//         }
//         let queue = []
//         let flag = false
//         queue.push(root)
//         while (queue.length != 0) {
//             let current = queue.shift()
//             if (current.left !=null) {
//                 if (flag === true) {
//                     return false
//                 }
//                 queue.push(current.left)
//             }else{
//                 flag = true
//             }
//             if (current.right !=null) {
//                 if (flag === true) {
//                     return false
//                 }
//                 queue.push(current.right)
//             }else{
//                 flag = true
//             }
//         }
//         return true
//     }
// }
// class Graph{
//     constructor(){
//         this.adjList = {}
//     }
//     addVertex(vertex){
//         if (!this.adjList[vertex]) {
//             this.adjList[vertex] = new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if (!this.adjList[vertex1]) {
//             this.adjList(vertex1)
//         }
//         if (!this.adjList[vertex2]) {
//             this.adjList(vertex2)
//         }
//         this.adjList[vertex1].add(vertex2)
//         this.adjList[vertex2].add(vertex1)
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjList[vertex1].delete(vertex2)
//         this.adjList[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if (!this.adjList[vertex]) {
//             return 
//         }
//         for (const edge of this.adjList[vertex]) {
//             this.removeEdge(vertex,edge)
//         }
//         delete this.adjList[vertex]
//     }
//     hasEdge(vertex1,vertex2){
//         return (
//             this.adjList[vertex1].has(vertex2) && 
//             this.adjList[vertex2].has(vertex1)
//         )
//     }
//     display(){
//         for (const vertex in this.adjList) {
//             console.log(vertex + "->" + [...this.adjList[vertex]]);
//         }
//     }
//     dfs(startingNode){
//         let visited = new Map()
//         let stack = [startingNode]
//         let result = []
//         visited.set(startingNode)
//         while (stack.length) {
//             let current = stack.pop()
//             result.push(current)
//             for (const edge of this.adjList[current]) {
                
//                 if (!visited.has(edge)) {
//                     visited.set(edge)
//                     stack.push(edge)
//                 }
//             }
//         }
//         return result
//     }
//     bfs(startingNode){
//         let queue = []
//         let visited = new Map()
//         queue.push(startingNode)
//         while (queue.length) {
//            let  current =queue.shift()
//            console.log(current.value);
//            for (const edge of this.adjList[current]) {
//             if (!visited.has(edge)) {
//                 queue.push(edge)
//                 visited.set(edge)
//             }
//            } 
//         }
//     }
// }

// const graph = new Graph();
// graph.addVertex("1");
// graph.addVertex("2");
// graph.addVertex("3");
// graph.addVertex("4");
// graph.addVertex("5");
// graph.addVertex("6");
// graph.addVertex("7");

// // edges means the connection
// graph.addEdge("1", "2");
// graph.addEdge("1", "3");
// graph.addEdge("1", "4");
// graph.addEdge("2", "3");
// graph.addEdge("4", "3");
// graph.addEdge("5", "4");
// graph.addEdge("5", "3");
// graph.addEdge("6", "5");
// graph.addEdge(7, "5");
// graph.bfs("1")

class Node{
    constructor(){
        this.keys = new Map()
        this.end = false
    }
    setEnd(){
        this.end = true
    }
    isEnd(){
        return this.end
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }
    add(input,node=this.root){
        if (input.length === 0) {
            node.setEnd()
            return
        }else if(!node.keys.has(input[0])){
            node.keys.set(input[0],new Node())
            return this.add(input.substr(1),node.keys.get(input[0]))
        }else{
            return this.add(input.substr(1),node.keys.get(input[0]))
        }
    }
    isWord(word){
        let node = this.root
        while (word.length>1) {
            if (!node.keys.has(word[0])) {
                return false
            }else{
                node = node.keys.get(word[0])
                word = word.substr(1)
            }
        }
        return (node.keys.has(word) && node.keys.get(word).isEnd()? true : false)
    }
    print(){
        let word = new Array()
        function search(node=this.root,string) {
            if (node.keys.size !=0) {
                for (const letter of node.keys.keys()) {
                    search(node.keys.get(letter),string.concat(letter))
                }
                if (node.isEnd()) {
                    word.push(string)
                }
            } else {
                string.length > 0 ? word.push(string) : undefined
                return
            }
        }
        search(this.root,new String())
        return word.length ? word : null
    }
}