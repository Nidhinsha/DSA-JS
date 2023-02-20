class heapSort7{
    constructor(array){
        this.array = array
    }
    sort(){
        let n = this.array.length
        for (let i = Math.floor(n/2)-1; i >=0; i) {
            this.heapify(n,i)
        }
        for (let i = n-1; i >=0; i--) {
           let temp = this.array[0]
           this.array[0] = this.array[i]
           this.array[i] = temp
           this.heapify(i,0)
            
        }
    }
    heapify(n,i){
        let largest = i
        let left = 2*i+1
        let right = 2*i+2

     if (left < n && this.array[left] < this.array[largest]) {
        largest = left
     }
     if (right < n && this.array[right] < this.array[largest]) {
        largest = right
     }
     if(largest != i){
        let temp = this.array[i]
        this.array[i] = this.array[largest]
        this.array[largest] = temp
        this.heapify(n,largest)
     }
    }
}