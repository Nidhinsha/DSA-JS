class minHeap5{
    constructor(){
        this.heap = [null]
    }
    insert(num){
        this.heap.push(num)

        if (this.heap.length > 2) {
            let index = this.heap.length-1
            while (this.heap[index] < this.heap[Math.floor(index/2)]) {
                if (index >=1) {
                    [this.heap[Math.floor(index/2)],this.heap[index]] = [this.heap[index],this.heap[Math.floor(index/2)]]
                }
                if (Math.floor(index/2) > 1) {
                    index = Math.floor(index/2)
                }else{
                    break
                }
            }
        }
    }
}