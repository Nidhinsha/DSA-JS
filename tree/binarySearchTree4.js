class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree4{

    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        const newNode =new Node(value)
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
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if (root.right === null) {
                root.right = newNode
            }else{
                this.insertNode(root.right)
            }
        }
    }
    min(root){
        if (!root.left) {
            return root.value
        }   else{
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
            this.deleteNode(root.left,value)
        }else if(value > root.value){
            this.deleteNode(root.right,value)
        }else{
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            }else if(!root.right){
                return root.left
            }

            root.value = this.min(root.right)
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

const bst = new BinarySearchTree4()
bst.insert(20)
bst.insert(3)
bst.insert(90)
bst.insert(2)
bst.preOrder(bst.root)