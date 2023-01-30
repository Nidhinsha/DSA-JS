class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Stack3{
    constructor(){
        this.top = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    push(value){
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }
        this.size++
    }
    pop(){
        if (this.isEmpty()) {
            console.log('Stack Underflow');
        }
        this.top = this.top.next
    }
    display(){
        let current = this.top 
        let listValues =''
        while (current) {
            listValues +=`${current.value} ` 
            current = current.next
        }
        console.log(listValues);
    }
}

const stack3 = new Stack3()
stack3.push(1)
stack3.push(2)
stack3.push(3)
stack3.push(4)
stack3.pop()
stack3.display()
