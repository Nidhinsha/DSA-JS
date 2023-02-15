function heapify(arr) {
    let n = arr.length;
  
    // Start with the parent of the last element
    for (let i = Math.floor(n/2) - 1; i >= 0; i--) {
      heapifySubtree(arr, i, n);
    }
  }
  
  function heapifySubtree(arr, i, n) {
    let smallest = i;
    let left = 2*i + 1;
    let right = 2*i + 2;
  
    // Check if the left child is smaller than the parent
    if (left < n && arr[left] < arr[smallest]) {
      smallest = left;
    }
  
    // Check if the right child is smaller than the smallest so far
    if (right < n && arr[right] < arr[smallest]) {
      smallest = right;
    }
  
    // If the smallest element is not the parent, swap it with the parent and heapify the subtree
    if (smallest != i) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
      heapifySubtree(arr, smallest, n);
    }
  }

  let arr = [5, 2, 8, 1, 9, 4];
heapify(arr);
console.log(arr);
