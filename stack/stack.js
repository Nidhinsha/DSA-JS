class Stack {
    constructor(){
        this.items = []
    }

    // push value to an stack 
    push(element){
        this.items.push(element)
    }

    // pop value of the stack 
    pop(){
       return  this.items.pop()
    }

    // to see the top of the stack
    peek(){
        return this.items[this.items.length - 1]
    }

    // checking the stack is empty
    isEmpty(){
        return this.items.length === 0
    }

    // to check the size 
    size(){
        return this.items.length
    }

    //to print the stack
    print(){
        console.log(this.items.toString());
    }
}

const stack = new Stack()
console.log(stack.isEmpty());
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
console.log(stack.size());
stack.pop()
console.log(stack.peek());
stack.print()