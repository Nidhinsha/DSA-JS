class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    prepend(value){
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
        }else{
            this.head = newNode
        }
        this.size++
    }
    append(value){
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
        }else{
           let prev = this.head
           while (prev.next) {
            prev=prev.next
           }
           prev.next = newNode

        }
        this.size++
    }
    insertBefore(value,data){
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
        }else if(this.head.value === data){
            newNode.next = this.head 
            this.head = newNode 
        }else{
            let temp = this.head
            while (temp.next.value != data) {
                temp=temp.next
            }
            newNode.next = temp.next
            temp.next = newNode
        }
        this.size++
    }
    insertAfter(value,data){
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
        }else{
            let temp = this.head
            while (temp.value != data) {
                temp=temp.next
            }
            newNode.next = temp.next
            temp.next = newNode
        }
        this.size++
    }
    insertMiddle(value){
        const newNode = new Node(value)
        let middle = Math.floor(this.size/2)
        if (this.isEmpty()) {
            this.head = newNode
        }else{
            let temp = this.head
           for (let i = 0; i < middle-1; i++) {
                temp=temp.next
           }
            newNode.next = temp.next
            temp.next = newNode
        }
        this.size++
    }
    removeFrom(index){
        if(index<0 || index>=this.size){
            return null
        }
        let removeNode
        if(index===0){
            removeNode = this.head
            this.head = this.head.next
        }else{
            let prev=this.head
            for (let i = 0; i < index-1; i++) {
               prev=prev.next
                
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }
}