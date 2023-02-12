class HeapSort3{
    constructor(array){
        this.array = array
    }
    swap(input,index_A,index_B){
        let temp = input[index_A]
        input[index_A] = input[index_B]
        input[index_B] = temp
    }

    heapify(array , index,length){
        let left = 2*index
        let right = 2* index+1
        let maximum

        if(right < length){
            if (array[left] >= array[right]) {
                maximum = left
            } else {
                maximum = right
            }
        }else if(left < length){
            maximum = left
        }else{
            return
        }

        if (array[index] < array[maximum]) {
            this.swap(array,index,maximum)
            this.heapify(array,maximum,length)
        }
    }
    sort(){
        let length = this.array.length
        for (let i = Math.floor(length/2)-1 ; i >=0; i-- ){
           this.heapify(this.array,i,length)
        }
        for (let i = length-1; i >=0; i--) {
            this.swap(this.array,0,i)
            this.heapify(this.array,0,i)
            
        }
        return this.array
    }
}

let array = [8,4,7,1,3,5]
let heap = new HeapSort3(array)
console.log(heap.sort());