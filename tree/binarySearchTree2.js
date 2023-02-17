class Node {
    constructor(value){
        this.value = value
        this.left = null 
        this.right = null
    }
}

class BinarySearchTree2{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root,newNode){
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right == null) {
                root.right = newNode
            } else {
                this.insertNode(root.right,newNode)
            }
        }
    }
    complete(root){
        if(root){
            // if(!root.left && !root.right){

            // }
            this.complete(root.left)
        }
    }
    search(root,value){
        if (!root) {
            return false
        }else{
            if (root.value === value) {
                return true
            }else if(value < root.value ){
                return this.search(root.left, value)
            }else{
               return this.search(root.right, value)
            }
        }
    }
    preOrder(root){
        if (root) {
            console.log(root);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if (root) {
            this.inOrder(root.left)
            console.log(root);
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root);
        }
    }
    levelOrder(){
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let current = queue.shift()
            console.log("!",current.value);
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
    }
    min(root){
        if (!root.left) {
            return root.value
        } else {
            
           return this.min(root.left)
        }
       
    }
    max(root){
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if (root === null) {
            return root
        }else if(value < root.value){
            root.left = this.deleteNode(root.left, value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right, value)
        }else{
            if (!root.right && !root.left) {
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
    findClosest(target){
        let current = this.root
        let closest = current.value
        while (current != null) {
            if (Math.abs(target-closest)> Math.abs(target - current.value)) {
                closest = current.value
            }
            if(target < current.value){
                current = current.left
            }else if(target > current.value){
                current = current.right
            }else{
                break
            }
        }
        return closest
    }
}

const BST = new BinarySearchTree2()
BST.insert(10)
BST.insert(8)
BST.insert(11)
BST.insert(4)
BST.insert(9)
// BST.levelOrder()
// console.log(BST.findClosest(12));