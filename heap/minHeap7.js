class minHeap7{

    constructor(){
        this.heap = [null]
    }
    insert(num){
        this.heap.push(num)
        if (this.heap.length >2) {
            let index = this.heap.length -1 
            while (this.heap[index] < this.heap[Math.floor(index/2)]) {
              if (index>=1) {
                [this.heap[index],this.heap[Math.floor(index/2)]] =
                [this.heap[Math.floor(index/2)],this.heap[index]] 

                if (Math.floor(index/2)>1) {
                    index = Math.floor(index/2)
                } else {
                    break
                }


              }  
            }
        }
    }
    remove(){
        let smallest = this.heap[1]
        if(this.heap.length >2){
            this.heap[1] = this.heap[this.heap.length-1]
            this.heap.splice(this.heap.length-1)

            if (this.heap.length === 3) {
                if (this.heap[1]>this.heap[2]) {
                    [this.heap[1],this.heap[2]] =
                    [this.heap[2],this.heap[1]]
                }
                return smallest
            }
            let i=1
            let left = 2*i
            let right = 2*i+1
            while (this.heap[1] >= this.heap[left] || 
                   this.heap[1] >= this.heap[right] ) {
                if (this.heap[left] < this.heap[right]) {
                    [this.heap[i],this.heap[left]] =
                    [this.heap[left],this.heap[i]]

                    i = i*2
                }else{
                    [this.heap[i],this.heap[right]] =
                    [this.heap[right],this.heap[i]]
                    i = i*2+1
                }
                left = 2*i
                right = 2*i+1

                if (this.heap[right] == undefined ||
                    this.heap[left] == undefined) {
                    break
                }
            }
        }
    }
}

const arr = [4,5,2,6,4,2,90,7,5]

for (let i = 0; i < arr.length; i++) {
    insert(arr[i])
}