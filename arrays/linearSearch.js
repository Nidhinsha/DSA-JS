function search(arr,target){
    for (let i = 0; i < arr.length; i++) {
       if (arr[i]===target) {
       
        return i
       }
        
    }
    return -1
}

// function sec(arr,target) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]==target){
//             return i
//         }
        
//     }
//     return -1
// }

let arr = [3,2,1,4,5,3,5]
let target = 1
console.log(search(arr,target));
console.log(sec(arr,4));