class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class insertInTheMiddle{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    prepend(value){
         const newNode = new Node(value)
        if (this.isEmpty()) {
           
            this.head = newNode
        } else {
           newNode.next=this.head
            this.head = newNode
            
        }
        this.size++
    }
    append(value){
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
        } else{
            let prev = this.head
            while (prev.next) {
                prev=prev.next
            }
            prev.next = newNode
        }
        this.size++
    }
    insertMiddle(value){
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
        }else{
            let middle = Math.floor(this.size/2)
            let prev= this.head
           for (let i = 0; i < middle-1; i++) {
            prev = prev.next
            
           }
            newNode.next = prev.next
            prev.next = newNode
            this.size++
        }
    }
    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }else{
            let listVariable=''
            let curr = this.head
            while (curr) {
                listVariable +=`${curr.value} `
                curr=curr.next
            }
            console.log(listVariable);
        }
    }
}
const list11 = new insertInTheMiddle()
list11.append(1)
list11.append(1)
list11.append(1)
list11.append(1)
list11.append(1)
list11.prepend(2)
list11.insertMiddle(9)
list11.print()