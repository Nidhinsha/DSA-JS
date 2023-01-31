
function quickSort(arr) {
    quickSortHelper(arr, 0, arr.length-1)
    return arr
}

function quickSortHelper(arr, startIndex, endIndex) {
    if (startIndex >= endIndex) {
        return
    }

    let pivot = startIndex
    let leftIndex = startIndex + 1
    let rightIndex = endIndex

    while (leftIndex <= rightIndex) {
        if (arr[leftIndex] > arr[pivot] && arr[rightIndex] < arr[pivot]) {
            swap(arr, leftIndex, rightIndex)
            leftIndex++
            rightIndex--
        }
        if (arr[leftIndex] <= arr[pivot]) {
            leftIndex++
        }
        if (arr[rightIndex] >= arr[pivot]) {
            rightIndex--
        }
    }
    swap(arr, rightIndex, pivot)
    quickSortHelper(arr,startIndex,rightIndex-1)
    quickSortHelper(arr,rightIndex + 1, endIndex)
}
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}



const arr = [4, 5, 2, 6, 2, 6, 7]
console.log(quickSort(arr));