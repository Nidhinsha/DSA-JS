class Node {
    constructor(value){
        this.value = value
        this.next=null
        this.prev = null
    }
}
class insertBeforeAndAfter{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size ===0
    }
    getSize(){
        return this.size
    }
    append(value){
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.size++
    }
    prepend(value){
        const newNode = new Node(value)
        if (this.isEmpty) {
            this.head = this.tail = newNode
        } else {
            newNode.next = this.head 
            this.head.prev = newNode
            this.head = newNode
        }
        this.size++
    }
    print(){
        if (this.isEmpty()) {
            console.log('list is empty');
        } else {
            let listVariable=''
            let curr = this.head
            while (curr) {
                listVariable +=`${curr.value} `
                curr = curr.next

            }
            console.log(listVariable);
        }
    }
    insertBefore(value,data){
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head=this.tail= newNode
        }
        else if(this.head.value === data){
            newNode.next = this.head
            this.head = newNode
        }else{
            let temp = this.head 
            while (temp.next.value !== data) {
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
            this.head=this.tail= newNode
        }
       else{
            let temp = this.head 
            while (temp.value !== data) {
                temp=temp.next
            }
            newNode.next = temp.next
            temp.next = newNode
        }
        this.size++
    }
    removeFromFront(){
        if (this.isEmpty()) {
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }

    removeFromEnd(){
        if (this.isEmpty()) {
            return null
        }
        const value = this.tail.value
        if (this.size===1) {
            this.head = null
            this.tail=null
        }else {
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
}
const list10 = new insertBeforeAndAfter()
list10.append(1)
list10.append(31)

list10.append(14)
list10.append(134)
list10.append(146)
// list10.insertBefore(40,14)
// list10.insertAfter(400,14)
list10.print()
list10.removeFromEnd()

list10.print()