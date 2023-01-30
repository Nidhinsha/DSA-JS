class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Queue{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size 
    }
    peek(){
        return this.front
    }
    enqueue(value){
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.front = this.rear = newNode
        } else {
            this.rear.next = newNode
            this.rear = newNode
        }
        this.size++
        
    }
    deequeue(){
        if (!this.front) {
            return null
        } else if(this.front === this.rear){
            this.rear = null
        }
        this.front = this.front.next
        this.size--
    }
    display(){
        if (this.isEmpty()) {
            console.log("Queue Empty");
        } else {
            let current = this.front
            let listValues = ''
            while (current) {
                listValues +=`${current.value} `
                current = current.next
            }
            console.log(listValues);
        }
    }
}
const myQueue = new Queue()
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(4)
myQueue.enqueue('monkey.D.Luffy')
myQueue.deequeue()
myQueue.peek()
myQueue.display()