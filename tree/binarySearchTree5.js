class Node {
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}

class BinarySearchTree5{
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
            this.insertNode(this.root , newNode)
        }
    }
    insertNode(root,newNode){
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left , newNode)
            }
        }else{
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right,newNode)
            }
        }
    }
    preOrder(root){
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    levelOrder(){
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let current = queue.shift()
            console.log(current.value);
            if (current.left) {
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
    }
}

const bst = new BinarySearchTree5()
bst.insert(34)
bst.insert(4)
bst.insert(3)
bst.insert(67)

bst.preOrder(bst.root)