

function bubbleSort(arr) {
   for (let i = 0; i < arr.length; i++) {
   for (let j = 0; j <( arr.length-i-1); j++) {
    
    if (arr[j]>arr[j+1]) {
        let temp = arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=temp
    }
   }
    
   }
//    for (let i = 0; i < arr.length; i=i+2) {
//     console.log(arr[i],'l');
    
//    }
//    console.log(arr);
}
let arr = [6, 20, 8, 2, 4]
console.log(arr);
bubbleSort(arr)
console.log(arr);