class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class bts10{
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
            this.insertNode(this.root, newNode)
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
        if (!root.left) {
            return root.value
        }else{
           return this.min(root.left)
        }
    }
    preOrder(root){
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    isComplete(root){
        if(root === null){
            return true
        }
        let queue = []
        let flag = false
        queue.push(root)

        while (queue.length != 0) {
            let current = queue.shift()
            if (current.left != null) {
                if (flag === true) {
                    return true
                }
                queue.push(current.left)
            } else {
                flag = true
            }
            if (current.right != null) {
                if (flag === true) {
                    return true
                }
                queue.push(current.right)
            } else {
                flag = true
            }
        }
        return true
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
}

const tree = new bts10()
tree.insert(2)
tree.insert(4)
tree.insert(3)
tree.insert(20)
tree.insert(222)
tree.preOrder(tree.root)

if (tree.isComplete(tree.root)== true) {
    console.log("complete");
} else {
    console.log("not complete");
}