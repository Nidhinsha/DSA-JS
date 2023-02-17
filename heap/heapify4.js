class heapify4{
    constructor(array){
        this.array = array
    }
    heapy(){
        let n = this.array.length
        for (let i = Math.floor(n/2)-1; i >=0; i--) {
           this.heapify(n,i)
        }
        return this.array
    }
    heapify(n,i){
        let largest = i
        let left = 2*i+1
        let right = 2*i+2
        if (left < n && this.array[left]>this.array[largest]) {
            largest = left
        }
        if (right < n && this.array[right]>this.array[largest]) {
            largest = right
        }
        if (largest != i) {
            let temp  = this.array[i]
            this.array[i] = this.array[largest]
            this.array[largest]=temp
            this.heapify(n,largest)
        }
    }
}

const arr=[4,2,5,7,3,7,32,4]
const heap = new heapify4(arr)
console.log(heap.heapy());