/* ---------- heap with zero in array ----------- */

function insert(arr, n) {
    let i = n;
    let temp = arr[i];
    while (i > 1 && temp > arr[Math.floor(i / 2)]) {
      arr[i] = arr[Math.floor(i / 2)];
      i = Math.floor(i / 2);
    }
    arr[i] = temp;
  }
  
  /* ---------- heap without zero in array ----------- */
  
  // function insert(arr, n) {
  //   let i = n;
  //   let temp = arr[i];
  //   while (i > 0 && temp > arr[Math.floor((i - 1) / 2)]) {
  //     arr[i] = arr[Math.floor((i - 1) / 2)];
  //     i = Math.floor((i - 1) / 2);
  //   }
  //   arr[i] = temp;
  // }
  
  function deleteFromHeap(arr, limit) {
    let i, j, x, temp, val;
    val = arr[1];
    x = arr[limit];
    arr[1] = arr[limit];
    arr[limit] = val;
    i = 1;
    j = i * 2;
    while (j < limit) {
      if (j < limit - 1 && arr[j + 1] > arr[j]) {
        j = j + 1;
      }
      if (arr[i] < arr[j]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        i = j;
        j = 2 * j;
      } else {
        break;
      }
    }
    return val;
  }
  
  const heap = [0, 10, 20, 30, 25, 5, 40, 35];
  
  let limit = 7;
  
  for (let i = 2; i < heap.length; i++) {
    insert(heap, i);
  }
  
  // for (let i = heap.length - 1; i > 1; i--) {
  //   deleteFromHeap(heap, i);
  // }
  
  // console.log(heap);
  
  console.log(deleteFromHeap(heap, limit));
  limit--;
  console.log(deleteFromHeap(heap, limit));
  limit--;
  
  // console.log(deleteFromHeap(heap));
  
  console.log(heap);