class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    push(value) {
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
            console.log('Stack UnderFlow');
        } 
        this.top= this.top.next
    }
    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let curr = this.top
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}

const stack2 = new Stack()
stack2.push(1)
stack2.push(2)
stack2.push(3)
stack2.pop()
stack2.print()