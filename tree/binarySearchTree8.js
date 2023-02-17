class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class binarySearch8{
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
        }else{
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right,newNode)
            }
        }
    }
    min(root){
        if (!root) {
            return root
        } else {
            return this.min(root.left)
        }
    }
    delete(value){
        this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if (root === null) {
            return root
        }
        if (value < root.value) {
            root.left=this.deleteNode(root.left,value)
        }
        else if (value > root.value) {
            root.right=this.deleteNode(root.right,value)
        }else{
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            }
            else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
    preOrder(root){
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
}

const bst8 = new binarySearch8()
bst8.insert(9)
bst8.insert(3)
bst8.insert(10)
bst8.preOrder(bst8.root)
bst8.delete(3)
bst8.preOrder(bst8.root)
