// class Heap {
//     constructor() {
//         this.heapArray = [0];
//         this.size = 1;
//     }

//     insert(data) {
//         let i = this.size;
//         while (i > 1 && data > this.heapArray[Math.floor(i / 2)]) {
//             this.heapArray[i] = this.heapArray[Math.floor(i / 2)];
//             i = Math.floor(i / 2);
//         }
//         this.heapArray[i] = data;
//         this.size++;
//     }
// }

// const h = new Heap();

// const arr = [10, 20, 30, 25, 5, 40, 35];

// for (let i = 0; i < arr.length; i++) {
//     h.insert(arr[i]);
// }

// console.log(h.heapArray);
function insert(arr, n) {
    let i = n;
    let temp = arr[i];
    while (i > 0 && temp > arr[Math.floor((i - 1) / 2)]) {
      arr[i] = arr[Math.floor((i - 1) / 2)];
      i = Math.floor((i - 1) / 2);
    }
    arr[i] = temp;
  }
  
  const heap = [10, 20, 30, 25, 5, 40, 35];
  
  for (let i = 1; i < heap.length; i++) {
    insert(heap, i);
  }
  
  console.log(heap);