const arr = [10,7,4,30,2]
let smallest=arr[0] ;
for (let i = 0; i < arr.length; i++) {
   
    if (arr[i]<smallest) {
        smallest=arr[i]
    }
   
}
console.log('the min value is '+smallest);
// let small = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]<small) {
//         small = arr[i]
//     }
    
// }
// console.log(small);
