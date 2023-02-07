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
                // return root.right.value this one for the task to display the close value to the searched element
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
            console.log(root.value,"!!!!!!!!!!!!!!!!!!! preorder root")
            console.log(root.value);
            console.log(root.left,"!!!!!!!!!!!!!!!!!!! preorder left");
            this.preOrder(root.left)
            console.log(root.right,"!!!!!!!!!!!!!!!!!!! preorder right");
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
    // BFS Traversal Approach
    levelOrder(){
        // use the optimized technique with linkedList
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let current = queue.shift()
            console.log("!",current.value);
            if (current.left) {
                // console.log("::::::::::current.left",current.left);
                queue.push(current.left)
                // console.log(":::::::::: After left Push",current.left);
            }
            if (current.right) {
                // console.log("{{{{{{{{{{{{{ current.right",current.right);
                queue.push(current.right)
                // console.log("{{{{{{{{{{{{{ after right push",current.right);
            }
        }
    }
    // find the min value of the tree to find that use the left of the tree
    // because smallest elemnt always in left of tree
    min(root){
        if (!root.left) {
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    // opps. of min
    max(root){
        if (!root.right) {
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    delete(value){
        this.root = this.deleteNode(this.root,value)
        // console.log(this.root,value,'delete node called################');
    }
    deleteNode(root,value){
        // console.log(root,value,'the root and value to delete');
        if(root===null){
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left,value)
            // console.log(root.left,value,'value < root-value ################');
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
            // console.log(root.right,value,'value > root-value ################');
        }else{
            if(!root.left && !root.right ){
                // console.log("when both left and right null for leaf elelment");
                return null
            }
            if(!root.left){
                // console.log(root.left,'when !root.left');
                return root.right
            }else if(!root.right){
                // console.log(root.right,'when !root.right');
                return root.left
            }
            root.value = root.min(root.right)
            // console.log(root.value ,'min value');
            // console.log(root.right,root.value,'deletenode again claiing');
            root.right = root.deleteNode(root.right,root.value)
            // console.log(root.right,'last line of delete');
        }
        return root
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
// console.log("$$$$$$$",treeSearch.search(treeSearch.root,5));
// console.log("$$$$$$$",treeSearch.search(treeSearch.root,15));

treeSearch.preOrder(treeSearch.root) // expected o/p is 10,5,3,7,15
// treeSearch.inOrder(treeSearch.root) // expected o/p is 3,5,7,10,15
// treeSearch.postOrder(treeSearch.root) // expected o/p is 3,7,5,15,10

// BFS traversal 
treeSearch.levelOrder()

// delete 3 
// treeSearch.delete(3)

// treeSearch.levelOrder()

// min
// console.log(treeSearch.min(treeSearch.root));
// max
// console.log(treeSearch.max(treeSearch.root));