//     // Javascript program for implement deletion in Heaps
     
//     // To heapify a subtree rooted with node i which is
//     // an index in arr[].Nn is size of heap
//     function heapify(arr, n, i)
//     {
//         let largest = i; // Initialize largest as root
//         let l = 2 * i + 1; // left = 2*i + 1
//         let r = 2 * i + 2; // right = 2*i + 2
   
//         // If left child is larger than root
//         if (l < n && arr[l] > arr[largest])
//             largest = l;
   
//         // If right child is larger than largest so far
//         if (r < n && arr[r] > arr[largest])
//             largest = r;
   
//         // If largest is not root
//         if (largest != i)
//         {
//             let swap = arr[i];
//             arr[i] = arr[largest];
//             arr[largest] = swap;
   
//             // Recursively heapify the affected sub-tree
//             heapify(arr, n, largest);
//         }
//     }
   
//     // Function to delete the root from Heap
//     function deleteRoot(arr, n)
//     {
//         // Get the last element
//         let lastElement = arr[n - 1];
   
//         // Replace root with first element
//         arr[0] = lastElement;
   
//         // Decrease size of heap by 1
//         n = n - 1;
   
//         // heapify the root node
//         heapify(arr, n, 0);
   
//         // return new size of Heap
//         return n;
//     }
   
//     /* A utility function to print array of size N */
//     function printArray(arr, n)
//     {
//         for (let i = 0; i < n; ++i)
//             console.log(arr[i]+" ");
//     }
     
//     let arr = [ 10, 5, 3, 2, 4 ];
//     let n = arr.length;
//     n = deleteRoot(arr, n);
//     printArray(arr, n);
 
// // This code is contributed by divyeshrabdiya07.
remove() {
    let smallest = this.heap[1]
    if (this.heap.length > 2) {
        this.heap[1] = this.heap[this.heap.length - 1]
        this.heap.splice(this.heap.length - 1)
        if (this.heap.length == 3) {
            if (this.heap[1] > this.heap[2]) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
            }
            return smallest
        }
        let i = 1
        let left = 2 * i
        let right = 2 * i + 1
        while (this.heap[i] >= this.heap[left] || this.heap[i] >= this.heap[right]) {
            if (this.heap[left] < this.heap[right]) {
                [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]]
                i = 2 * i
            } else {
                [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]]
                i = 2 * i + 1
            }
            left = 2 * i
            right = 2 * i + 1
            if (this.heap[left] == undefined || this.heap[right] == undefined)
                break
        }
    } else if (this.heap.length == 2) {
        this.heap.splice(1, 1)
    } else {
        return null
    }
    return smallest
}