class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
    
}
class arrayToLinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    append(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
           
        } else {
            let prev= this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next=node
        }
        this.size++
    }

    print(){
        if (this.isEmpty()) {
            console.log('List is empty');
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

let arr =[1,2,3,4,5,6]
const list =  new arrayToLinkedList()

for (let i = 0; i < arr.length; i++) {
    list.append(arr[i])
    
}
list.print()