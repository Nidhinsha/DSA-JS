const linkedList = require('./linkedList8')

class LinkedListQueue{
    constructor(){
        this.list = new linkedList()
    }

    enqueue(value){
        this.list.append(value)
    }

    dequeue(){
       return this.list.removeFromFront()
    }

    peek(){
        return this.list.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    print(){
       return this.list.print()
    }
}

const queue = new LinkedListQueue()
console.log(queue.isEmpty());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.print()

console.log(queue.dequeue());
queue.print()
console.log(queue.peek());