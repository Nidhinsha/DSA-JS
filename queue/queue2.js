class Node {
    constructor(value){
        this.value = value
        this.next = null 
    }
}
class Queue2{
    constructor(){
        this.front = this.rear = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    peek(){
        return this.front.value
    }
    enQueue(value){
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.front = this.rear = newNode
        } else {
            this.rear.next = newNode
            this.rear = newNode
        }
        this.size++
    }
    deQueue(){
        if (this.isEmpty()) {
           return null
        } 
        this.front = this.front.next
        this.size--
    }
    display(){
        if (this.isEmpty()) {
            console.log('Queue Empty');
        } else {
            let current = this.front
            let listValues=''
            while (current) {
                listValues+=`${current.value} `
                current = current.next
            }
            console.log(listValues);
        }
    }
}

const queue2 = new Queue2()
queue2.enQueue(1) 
queue2.enQueue(2) 
queue2.enQueue(3) 
queue2.enQueue(4) 
queue2.deQueue()
queue2.display()