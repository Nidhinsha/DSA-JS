class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class binarySearch7{
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
            if (root.right==null) {
                root.right = newNode
            } else {
                this.insertNode(root.right,newNode)
            }
        }
    }
    min(root){
        if (!root) {
            return null
        } else {
            return this.min(root.left)
        }
    }
    delete(value){
        this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if (root ===null) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if (!root.left && !root.right) {
                return null
            }
            if(!root.left){
                return root.right
            }
            if(!root.right){
                return root.left
            }

            root.value = this.min(root.right)
            this.right = this.deleteNode(root.right,root.value)
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
const bst7 = new binarySearch7()
bst7.insert(34)
bst7.insert(4)
bst7.insert(3)
bst7.insert(67)
bst7.preOrder(bst7.root)
console.log(bst7.delete(4));
bst7.preOrder(bst7.root)