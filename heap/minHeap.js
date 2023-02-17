class minHeap{
    constructor(){
        this.heap = [null]
    }
    insert(num){
        this.heap.push(num)
        if (this.heap.length > 2) {
            let index = this.heap.length -1
            while (this.heap[index]<this.heap[Math.floor(index/2)]) {
                if(index > 1){
                    [this.heap[Math.floor(index/2)],this.heap[index]] =
                    [this.heap[index],this.heap[Math.floor(index/2)]]
                    if (Math.floor(index/2)>1) {
                        index = Math.floor(index/2)
                    } else {
                        break
                    }
                }
            }
        }
    }
}

const Min = new minHeap()
Min.insert(10)
Min.insert(20)
Min.insert(30)
Min.insert(5)
console.log(Min.heap);