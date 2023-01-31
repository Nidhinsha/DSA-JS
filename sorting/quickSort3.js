function quickSort(arr) {
    quickHelper(arr,0,arr.length-1)
    return arr
}

function quickHelper(arr,startIndex,endIndex) {
    if (startIndex >= endIndex) {
        return
    }
    let pivot = startIndex
    let left = startIndex+1
    let right = endIndex
    
    while (left<=right) {
        if(arr[left]> arr[pivot] && arr[right]<arr[pivot]){
            swapping(arr,left,right)
            left++
            right--
        }
        if (arr[left]<= arr[pivot]) {
            left++
        }
        if (arr[right]>=arr[pivot]) {
            right--
        }
    }
    swapping(arr,right,pivot)
    quickHelper(arr,startIndex,right-1)//to call the left side arr
    quickHelper(arr,right+1,endIndex)
}
function swapping(arr,i,j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] =temp
}

const arr = [3,4,2,1,6,8]
console.log(quickSort(arr));