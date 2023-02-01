function sorting(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
          if (arr[j]>arr[j+1]) {
            let temp = arr[j]
            arr[j]=arr[j+1]
            arr[j+1] = temp
          }
            
        }
    }
    console.log(arr);
    console.log(arr[1]);
    
}


const arr=[5,3,-4,7,-2,8]

console.log(sorting(arr));