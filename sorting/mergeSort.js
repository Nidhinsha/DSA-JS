// function mergeSort(arr) {
//     if (arr.length < 2) {
//         return arr
//     }
//     const mid = Math.floor(arr.length/2)
//     const leftArr = arr.slice(0,mid)
//     const rightArr = arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }
// function merge(leftArr,rightArr) {
//     const sortedArr = []
//     while (leftArr.length && rightArr.length) {
//         if (leftArr[0] <= rightArr[0]) {
//             sortedArr.push(leftArr.shift())
//         } else {
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return[...sortedArr,...leftArr,...rightArr]
// }

const arr = [8,20,-2,4,-6]
console.log(mergeSort(arr));

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    const middle = Math.floor(arr.length/2) 
    const left = arr.slice(0,middle)
    const right = arr.slice(middle)

    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right) {
    const sortedArr = []
    while (left.length && right.length) {
        if (left[0]<=right[0]) {
            sortedArr.push(left.shift())
        }
        sortedArr.push(right.shift())
    }
    return [...sortedArr,...left,...right]
}