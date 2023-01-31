function selectionSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        let min = i
        for (let j = i+1; j < arr.length; j++){
          if (arr[j]<arr[min])  min = j
        }
         let temp = arr[i]
          arr[i] = arr[min]
          arr[min] = temp
       
    } console.log(arr);
}
const arr = [3,2,1,4,6,3,7]
selectionSort(arr)
