// left child = i * 2
// right child = i * 2 + 1
// parent = i / 2
class minHeap {
    constructor() {
        this.heap = [null]
    }
    insert(num) {
        this.heap.push(num)
        if (this.heap.length > 2) {
            let index = this.heap.length - 1 // it is the newly added value the last value that added
            while (this.heap[index] < this.heap[Math.floor(index / 2)]) {
                if (index >= 1) {
                    [this.heap[Math.floor(index / 2)], this.heap[index]] = [ this.heap[index],this.heap[Math.floor(index/2)]] // to swap them
                    if (Math.floor(index/2) > 1) {
                        index = Math.floor(index/2)
                    }else{
                        break
                    }
                }
            }
        }
    }
    remove(){
        let smallest = this.heap[1]
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1]
            this.heap.splice(this.heap.length - 1)

            if (this.heap.length == 3) {
                if (this.heap[1]>this.heap[2]) {
                    [this.heap[1],this.heap[2]] = [this.heap[2],this.heap[1]]
                }
                return smallest
            }
            let i = 1
            let left = 2 * i
            let right = 2 * i + 1
            while (this.heap[i] >= this.heap[left] || this.heap[i] >= this.heap[right] ) {
                if (this.heap[left] < this.heap[right]) {
                    [this.heap[i],this.heap[left]] = [this.heap[left],this.heap[i]]
                    i = 2 * i
                } else {
                    [this.heap[i],this.heap[right]] = [this.heap[right],this.heap[i]]
                    i = 2 * i + 1
                }
                left = 2 * i
                right = 2 * i + 1
                if (this.heap[left] == undefined || this.heap[right] == undefined ) {
                    break
                }
            }
        }else if(this.heap.length == 2){
            this.heap.splice(1,1)
        }else {
            return null
        }
        return smallest
    }
}

const heapMin = new minHeap()
heapMin.insert(10)
heapMin.insert(20)
heapMin.insert(30)
heapMin.insert(5)
console.log(heapMin.heap);

heapMin.remove()

console.log(heapMin.heap);
