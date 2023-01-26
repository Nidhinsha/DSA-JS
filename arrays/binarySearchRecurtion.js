function recursiveBinarySearch(arr,target){
    return search(arr,target,0,arr.length - 1)
}

function search(arr,target,startIndex,endIndex) {
    if (startIndex>endIndex) {
        return -1
    }
    let middle = Math.floor((startIndex+endIndex)/2)
    if (arr[middle]===target) {
        return middle
    }
    if (arr[middle]>target) {
        search(arr,target,startIndex,middle-1)
    }else{
        search(arr,target,middle=1,endIndex)
    }
}

console.log(recursiveBinarySearch([3,4,5,6,7],5));