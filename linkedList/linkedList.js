 class Node {
    constructor(value){
        this.value = value 
        this.next = null
    }
 }

 class LinkedList {
    constructor() {
        this.head = null ;
        this.size = 0
    }

    isEmpty(){
        return this.size === 0 
    }

    getSize(){
        return this.size
    }

    // to add a new node 
    prepend(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            // node.next = this.head
            this.head = node
        }
        this.size++
    }

    // to print 
    print(){
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues +=`${curr.value} ` 
                curr = curr.next
            }
           
        }
    }
 }

 const list = new LinkedList()
 console.log("List is Empty",list.isEmpty());
 list.print()
 list.prepend(10)
 list.prepend(20)
 console.log("List size",list.getSize());
 list.print()

 // in this method the value added in the first node 