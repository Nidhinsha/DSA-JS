class minHeapify3 {
    constructor(array) {
        this.array = array
    }
    heapify(arr) {
        let n = arr.length
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            this.heapifySubTree(arr, i, n)
        }
    }
    heapifySubTree(arr, i, n) {
        let smallest = i
        let left = 2 * i + 1
        let right = 2 * i + 2
        if (left < n && arr[left] < arr[smallest]) {
            smallest = left
        }
        if (right < n && arr[right] < arr[smallest]) {
            smallest = right
        }
        if (smallest != i) {
            let temp = arr[i]
            arr[i] = arr[smallest]
            arr[smallest] = temp
            this.heapifySubTree(arr, smallest, n)
        }
    }
    // checking whether it is in or max heap
    isMinHeap(heap) {
        for (let i = 0; i < heap.length; i++) {
            let left = i * 2 + 1;
            let right = i * 2 + 2;

            if (left < heap.length && heap[i] > heap[left]) {
                return false;
            }

            if (right < heap.length && heap[i] > heap[right]) {
                return false;
            }
        }

        return true;
    }
    //   height of a heap

    const heap = [ /* Your heap elements */];
    let n = heap.length;
        let height = 0;

    while (n > 0) {
    n = Math.floor(n / 2); // Move to the parent node
    height++; // Increment the height
    }
      
}
let arr = [4, 3, 6, 8, 4, 76, 6, 33, 6, 5, 3, 4, 4, 5]
const min3 = new minHeapify3(arr)
min3.heapify(arr)
console.log(arr);