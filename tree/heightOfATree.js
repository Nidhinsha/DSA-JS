class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class heightOfTree{
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
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left,newNode)
            }
        } else {
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
    maxDepth(root){
        if (root == null) {
            return 0
        }else{
            let leftDepth = this.maxDepth(root.left)
            let rightDepth = this.maxDepth(root.right)
            return Math.max(leftDepth,rightDepth)+1
        }
    }
}

const height = new heightOfTree()
height.insert(20)
height.insert(40)
height.insert(2)
height.insert(12)
height.insert(4)
height.insert(57)
height.preOrder(height.root)
console.log(height.maxDepth(height.root)+" depth");