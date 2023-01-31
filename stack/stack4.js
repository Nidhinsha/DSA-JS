// class Stack4{
//     constructor(){
//         this.items=[]
//     }
//     push(element){
//         this.items.push(element)
//     }
//     pop(){
//         return this.items.pop()
//     }
//     peek(){
//         return this.items[this.items.length -1]
//     }
//     isEmpty(){
//         return this.items.length === 0
//     }
//     getSize(){
//         return this.items.length
//     }
//     print(){
//         console.log(this.items.toString());
//     }
// }
class Stack4{
    constructor(){
        this.items = [] 
    }
    push(element){
        // this.items.push(element)
        this.items[this.items.length] = element
    }
    pop(){
        this.items.pop()
    }
    peek(){
       return this.items[0]
    }
}
const stack4 = new Stack4()
stack4.push(1)
stack4.push(10)
stack4.push(100)
stack4.push(1000)
stack4.pop()
console.log(stack4.peek()); 
console.log(stack4);