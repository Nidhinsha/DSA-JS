class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class arrayToLinkedList2 {
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size ===0
    }
    getSize(){
        return this.size 
    }
    prepend(value){
        const newNode=new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
        } else {
            this.head = newNode
        }
        this.size++
    }
    append(value){
        const newNode = new Node(value)

        if (this.isEmpty()) {
            this.head = newNode
        } else {
            let prev =this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = newNode
        }
        this.size++
    }
    //remove node using the index
    removeFrom(index){
        if (index < 0 && index >=this.size) {
            return null
        }
        let removeNode
        if (index===0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index-1; i++) {
                prev=prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }
    // remove node using value
    removeValue(value){
        if (this.isEmpty()) {
            return null
        }if(this.head.value === value){
            this.head == this.head.next
            this.size--
            return value
        }else{
            let prev = this.head
            while (prev.next && prev.next.value != value) {
                prev=prev.next
            }
            if (prev.next) {
                const removeNode = prev.next
                prev.next = removeNode.next
            }
        }
    }
    print(){
        if (this.isEmpty()) {
            console.log('it is empty');
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
const list = new arrayToLinkedList2()
let array =[1,2,3,4,54,5,6,6,7,8,9]

for (let i = 0; i < array.length; i++) {
   list.append(array[i])
    
}
list.print()
list.removeValue(54)
list.print()