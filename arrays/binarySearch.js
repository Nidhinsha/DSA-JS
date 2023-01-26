function search(arr,target) {
    let startIndex = 0
    let endIndex = arr.length-1

    while (startIndex < endIndex) {
        let middle=Math.floor((startIndex + endIndex) / 2);
        if (arr[middle]==target) {
            return middle
        } else if(arr[middle]<target){
            startIndex=middle+1
        }else{
            endIndex = middle-1
        }
    }
    return -1
}

let arr = [1,2,3,4,5,6,7,8,9]
let target = 6
console.log(search(arr,7));