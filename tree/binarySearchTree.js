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
        // console.log(value,"===== value");
        const newNode = new Node(value)

        if (this.isEmpty()) {
            
            this.root = newNode
            // console.log("adding value when tree is empty");
        } else {
           
            this.insertNode(this.root,newNode) // used for recurtion 
            // console.log("++++++ calling the recursive fctn");
        }
    }

    insertNode(root,newNode){
        // console.log(root,newNode,"---recursive Argment ");
        // checking the left sub tree
        if(newNode.value < root.value){
            if (root.left === null) {
                
                root.left = newNode
                // console.log("when left is nulll");
            }else{
                
                this.insertNode(root.left,newNode)
                // console.log(root.left,newNode,"add value to left ");
            }
        }else{
             // checking the right sub tree
            if (root.right == null) {
              
                root.right = newNode
                // console.log("when right is nulll");
            }else{
             
                this.insertNode(root.right,newNode)
                // console.log(root.right,newNode,"add value to left ");
            }
        }
    }

    search(root,value){
        // console.log(root,value,"********search root and value");
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                // console.log(root.value,value,"********element is in root");
                return true
            }else if(value < root.value){
                // console.log(value,root.value,"********the value < root");
               return this.search(root.left,value)
            }else{
                // console.log(value,root.value,"********the value > root");
               return this.search(root.right,value)
            }
        }
    }

    preOrder(root){
        if (root) {
            // console.log(root.value,"!!!!!!!!!!!!!!!!!!! preorder root")
            console.log(root.value);
            // console.log(root.left,"!!!!!!!!!!!!!!!!!!! preorder left");
            this.preOrder(root.left)
            // console.log(root.right,"!!!!!!!!!!!!!!!!!!! preorder right");
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if (root) {
            // console.log(root.left,"@@@@@@@@@@@@@@@@@@@@ inOrder left");
            this.inOrder(root.left)
            // console.log(root.value,"@@@@@@@@@@@@@@@@@@@@ inOrder root");
            console.log(root.value);
            // console.log(root.right,"@@@@@@@@@@@@@@@@@@@@ inOrder right");
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if (root) {
            // console.log(root.left,"%%%%%%%%%%%%%%%%%%%%%   inOrder left");
            this.postOrder(root.left)
            // console.log(root.right,"%%%%%%%%%%%%%%%%%%%%%   inOrder right");
            this.postOrder(root.right)
            // console.log(root.value,"%%%%%%%%%%%%%%%%%%%%%   inOrder root");
            console.log(root.value);
        }
    }
}

const treeSearch = new BinarySearchTree()
console.log("The tree is ",treeSearch.isEmpty());
treeSearch.insert(10)
treeSearch.insert(5)
treeSearch.insert(15)
treeSearch.insert(3)
treeSearch.insert(7)

console.log("$$$$$$$",treeSearch.search(treeSearch.root,10));
console.log("$$$$$$$",treeSearch.search(treeSearch.root,5));
console.log("$$$$$$$",treeSearch.search(treeSearch.root,15));

treeSearch.preOrder(treeSearch.root) // expected o/p is 10,5,3,7,15
treeSearch.inOrder(treeSearch.root) // expected o/p is 3,5,7,10,15
treeSearch.postOrder(treeSearch.root) // expected o/p is 3,7,5,15,10
