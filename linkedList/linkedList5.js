
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class linkedlist5{
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

 const list5 = new linkedlist5()
 console.log("List is Empty",list5.isEmpty());

 console.log("List size",list5.getSize());
 list5.print()

 list5.insert(10,0)
 list5.insert(10,1)
 list5.insert(120,2)
 list5.insert(107,3)
 list5.insert(07,4)
 list5.print()
 console.log(list5.removeValue(10));
 list5.print()