class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class lengthOfATree{
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
        if(newNode.value < root.value){
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
    treeSize(root){
        if (!root) return 0
        return 1 + this.treeSize(root.left)+this.treeSize(root.right)
    }
}
const bts7 = new lengthOfATree()
bts7.insert(10)
bts7.insert(50)
bts7.insert(2)
bts7.insert(99)
bts7.preOrder(bts7.root)
console.log("length"+bts7.treeSize(bts7.root));