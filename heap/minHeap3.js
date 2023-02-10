class minHeap3{
    constructor(){
        this.heap = [null]
    }
    insert(num){
        this.heap.push(num)
        if (this.heap.length > 2) {
            let index = this.heap.length - 1
            while (this.heap[index]< this.heap[Math.floor(index/2)]) {
                if (index >= 1) {
                    [this.heap[Math.floor(index/2)],this.heap[index]] = [this.heap[index],this.heap[Math.floor(index/2)]]
                }
                if (Math.floor(index/2) > 1) {
                    index = Math.floor(index/2)
                } else {
                    break
                }
            }
        }
    }
}

const heap = new minHeap3()
// heap.insert(9)
// heap.insert(9)
// heap.insert(6)
// heap.insert(70)
const heapArr = [null, 10, 20, 30, 25, 5, 40, 35];
  
  let limit = 7;
  
  for (let i = 2; i < heapArr.length; i++) {
    heap.insert(heapArr[i]);
  }
console.log(heap.heap);