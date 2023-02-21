class Node{
    constructor(value){
        this.value = value
        this.left = null 
        this.right = null
    }
}
class isCompleteBT{
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
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right,newNode)
            }
        }
    }
    
    countNodesWithTwoOrMoreChildren(root){
        
        if (root === null) {
            console.log('[');
            return 0;
          }
          let count = 0;
          if (root.left != null && root.right != null) {
            count = 1;
          }
          return count + this.countNodesWithTwoOrMoreChildren(root.left) + this.countNodesWithTwoOrMoreChildren(root.right);
    }
    isComplete(root){
        if (root === null) {
            return true
        }
        let queue = []
        let flag = false
        queue.push(root)

        while (queue.length !=0 ) {
            let current = queue.shift()

            if (current.left != null) {
                if (flag == true) {
                    return true
                }
                queue.push(current.left)
            }else{
                flag = true
            }

            if(current.right != null){
                if (flag == true) {
                    return false
                }
                queue.push(current.right)
            }else{
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
const cBt = new isCompleteBT()
cBt.insert(1)
cBt.insert(2)
cBt.insert(3)
cBt.insert(4)
cBt.insert(5)
cBt.insert(6)
cBt.levelOrder()

if (cBt.isComplete(cBt.root)==true) {
    console.log("complete tree");
} else {
    console.log("Not a Complete Tree");
}

console.log(cBt.countNodesWithTwoOrMoreChildren(cBt.root),"count");