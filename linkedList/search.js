
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class linkedlist6{
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
    search(value){
        if (this.isEmpty()) {
            return -1
        }
        let i = 0 ;
        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                return i ; // i is the index
            }
            curr  = curr.next 
            i++ 
        }
        return -1
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

    // remove node using the value
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head 
            while (prev.next && prev.next.value !== value) {
                prev = prev.next 
            }
            if(prev.next){
               const removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }
    }
}

 const list6 = new linkedlist6()
 console.log("List is Empty",list6.isEmpty());

 console.log("List size",list6.getSize());
 list6.print()

 list6.insert(10,0)
 list6.insert(10,1)
 list6.insert(120,2)
 list6.insert(107,3)
 list6.insert(07,4)
 list6.print()
//  console.log(list6.removeValue(10));
console.log(list6.search(107));
 list6.print()