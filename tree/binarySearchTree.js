class Node {
    constructor(value){
        this.value = value
        this.left = null 
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        console.log(value,"===== value");
        const newNode = new Node(value)

        if (this.isEmpty()) {
            this.root = newNode
        } else {
            console.log("++++++ calling the recursive fctn");
            this.insertNode(this.root,newNode) // used for recurtion 

        }
    }

    insertNode(root,newNode){
        console.log(root,newNode,"---recursive Argment ");
        // checking the left sub tree
        if(newNode.value < root.value){
            if (root.left === null) {
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
             // checking the right sub tree
            if (root.right == null) {
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
}

const treeSearch = new BinarySearchTree()
console.log("The tree is ",treeSearch.isEmpty());
treeSearch.insert(10)
treeSearch.insert(5)
treeSearch.insert(15)
