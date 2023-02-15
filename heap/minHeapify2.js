class minHeapify2{
    constructor(array){
        this.array = array
    }
    heapify(arr){
        let n = arr.length
        for (let i = Math.floor(n/2)-1; i >=0; i--) {
           this.heapifySubTree(arr,i,n)
        }
    }
    heapifySubTree(arr,i,n){
        let smallest = i 
        let left = 2*i+1
        let right = 2*i+2
        if (left < n && arr[left] < arr[smallest]) {
            smallest = left
        }
        if (right < n && arr[right] < arr[smallest]) {
            smallest = right
        }

        if(smallest !=i){
            let temp = arr[i]
            arr[i] = arr[smallest]
            arr[smallest] = temp
            this.heapifySubTree(arr,smallest,n)
        }
    }
}
let arr = [5, 2, 8, 1, 9, 4];
const min2 = new minHeapify2(arr)


min2.heapify(arr);
console.log(arr);