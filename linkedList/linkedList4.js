
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class linkedList4{
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
    removeFrom(index){
        if (index < 0 || index >= this.size) {
            return null
        }
        let removeNode
        if(index ===0){
            removeNode = this.head 
            this.head = this.head.next
        }else{
            let prev = this.head 
            for (let i = 0; i < index -1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }
}

 const list4 = new linkedList4()
 console.log("List is Empty",list4.isEmpty());

 console.log("List size",list4.getSize());
 list4.print()

 list4.insert(10,0)
 list4.insert(10,1)
 list4.insert(120,2)
 list4.insert(107,3)
 list4.insert(07,4)
 list4.print()
 console.log(list4.removeFrom(5));
 list4.print()