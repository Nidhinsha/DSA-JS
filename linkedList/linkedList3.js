
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class linkedList3{
    constructor(){
        this.head = null
        this.size =0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    append(value){
        const newNode = new Node(value)

        if (this.isEmpty()) {
            this.head = newNode
        } else {
            let prev = this.head

            while (prev.next) {
                prev=prev.next
            }
            prev.next = newNode
        }
        this.size++
    }
    // prepend
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
    // multiple insert method 
    insert(value,index){
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        }
        else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
               prev = prev.next
                
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    print(){
        if (this.isEmpty()) {
            console.log("list is empty");
        } else {
            let curr = this.head
            let listVariable = ''
            while (curr) {
                listVariable +=`${curr.value} `
                curr = curr.next
            }
            console.log(listVariable);
        }
    }
}

 const list3 = new linkedList3()
 console.log("List is Empty",list3.isEmpty());

 console.log("List size",list3.getSize());
 list3.print()

 list3.insert(10,0)
 list3.insert(10)
 list3.insert(107)
 list3.insert(07)
 list3.print()