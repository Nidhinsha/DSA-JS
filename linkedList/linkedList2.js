class Node {
    constructor (value){
        this.value = value 
        this.next  = null
    }
}

class LinkedList2{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
       return this.size === 0
    }
    getSize(){
        return this.size
    }
    addValue(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while(prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    print(){
        if (this.isEmpty()) {
            console.log("List is Empty");
        } else {
            let curr = this.head
            let listValues=''
            while (curr) {
                listValues +=`${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }
  
}
const list2 = new LinkedList2()

list2.addValue(10)
list2.addValue(120)
list2.addValue(140)
list2.print()