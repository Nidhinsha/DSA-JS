class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class binarySearchTree6{
    constructor(){
        this.root =  null
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
}
const bts6 = new binarySearchTree6()
bts6.insert(10)
bts6.insert(50)
bts6.insert(2)
bts6.insert(99)
bts6.preOrder(bts6.root)
