
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class linkedlist8{
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
    // prepend using head and tail 
    prepend(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head 
            this.head = node
        }
        this.size++
    }
    // append using head and tail 
    append(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node 
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    // remove one from the front  using head and tail 
    removeFromFront(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }
     // remove one from the end  using head and tail 

    removeFromEnd(){
        if (this.isEmpty()) {
            return null
        }
        const value = this.tail.value
       if (this.size === 1) {
            this.head = null
            this.tail = null
       }else{
            let prev = this.head
            while (prev.next !== this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
       }
       this.size--
       return value
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
    // remove node by index
   
}
module.exports = linkedlist8
//  const list8 = new linkedlist8()
//  console.log("List is Empty",list8.isEmpty());

//  console.log("List size",list8.getSize());
//  list8.print()

//  list8.append(8)
//  list8.append(8)
//  list8.append(8)
//  list8.prepend(100)
 
//  list8.print()