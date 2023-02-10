class HeapSort {
    // constructor to initialize the array to be sorted
    constructor(array) {
      this.array = array;
    }
  
    // helper function to swap elements at two indices
    swap(input, index_A, index_B) {
      let temp = input[index_A];
      input[index_A] = input[index_B];
      input[index_B] = temp;
    }
  
    // function to maintain the max heap property
    max_heapify(array, index, length) {
      // calculate the indices of the left and right children
      let left = 2 * index;
      let right = 2 * index + 1;
      let maximum;
  
      // determine the maximum child if both left and right children exist
      if (right < length) {
        if (array[left] >= array[right]) {
          maximum = left;
        } else {
          maximum = right;
        }
      } 
      // determine the maximum child if only the left child exists
      else if (left < length) {
        maximum = left;
      } 
      // return if there are no children
      else {
        return;
      }
  
      // if the value of the maximum child is greater than the parent, swap the two
      if (array[index] < array[maximum]) {
        this.swap(array, index, maximum);
        // continue heapifying the tree from the new position of the maximum child
        this.max_heapify(array, maximum, length);
      }
    }
  
    // function to sort the array
    sort() {
      let length = this.array.length;
  
      // build the max heap
      for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        this.max_heapify(this.array, i, length);
      }
  
      // repeatedly swap the root element with the last element and reduce the length of the heap to sort the array
      for (let i = length - 1; i >= 0; i--) {
        this.swap(this.array, 0, i);
        this.max_heapify(this.array, 0, i);
      }
      return this.array;
    }
  }
  
  // example usage
  let array = [8, 4, 7, 1, 3, 5];
  let heap = new HeapSort(array);
  document.getElementById("before").innerHTML = `Array before: ${array}`;
  document.getElementById("after").innerHTML = `Array after: ${heap.sort()}`;
  