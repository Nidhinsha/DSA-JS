const linkedList = require('./linkedList8')

class LinkedListStack{
    constructor(){
        this.list = new linkedList()
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
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

const stack = new LinkedListStack()
console.log(stack.isEmpty());

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.print()

console.log(stack.pop());
stack.print()
console.log(stack.peek());