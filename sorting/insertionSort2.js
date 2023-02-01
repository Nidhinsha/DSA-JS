

function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j= i-1
        while (j>=0 && arr[j]>numberToInsert) {
            arr[j+1]= arr[j]
            j= j-1
        }
        arr[j+1]= numberToInsert
    }
    return arr
}
const arr = [4,5,3,6,8,3,1]
insertion(arr)
console.log(arr);