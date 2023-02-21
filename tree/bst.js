class Node{
    constructor(value){
        this.value = value
        this.left  = null
        this.right = null
    }
}

class bst{
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
    preOrder(root){
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    levelOrder(){
        let queue = []
        queue.push(this.root)

        while (queue.length) {
            let current = queue.shift()
            console.log(current.value);

            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
    }
    min(root){
        if (!root) {
            return root.value
        } else {
            this.min(root.left)
        }
    }
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if (root === null) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right , value)
        }else{
            if (!root.left && !root.right) {
                return null
            }else if(!root.left){
                return root.right
            }else if (!root.right) {
                return root.left

            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
    }
    treeSize(root){
        if (!root) {
            return 0
        }
        return 1 + this.treeSize(root.left) + this.treeSize(root.right)
    }
    maxDepth(root){
        if (root == null) {
            return 0
        } else {
            let left = this.maxDepth(root.left)
            let right = this.maxDepth(root.right)
            return Math.max(left,right)+1
        }
    }
    conutChild(root){
        if (root===null) {
            return 0
        }
        let count = 0
        if (root.left !=null && root.right != null) {
            count=1
        }
        return count+this.conutChild(root.left)+this.conutChild(root.right)
    }
    isComplete(root){
        if (root === null) {
            return true
        }
        let queue = []
        let flag = false
        queue.push(root)
        while (queue.length !=0) {
            let current = queue.shift()
            if (current.left != null) {
                if (flag ==true) {
                    return false
                }
                queue.push(current.left)
            } else {
                flag = true
            }
            if (current.right != null) {
                if (flag ==true) {
                    return false
                }
                queue.push(current.right)
            } else {
                flag = true
            }
        }
        return true
    }
}

const bst1 = new bst()
bst1.insert(10)
bst1.insert(2)
bst1.insert(4)
bst1.insert(20)
bst1.insert(22)

bst1.preOrder(bst1.root)
console.log("Level Order");
bst1.levelOrder()

console.log(bst1.conutChild(bst1.root),'l');