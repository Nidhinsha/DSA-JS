function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2)
    let leftArr = arr.slice(0, mid)
    let rightArr = arr.slice(mid)

    console.log(leftArr, 'Lefttttt');
    console.log(rightArr, 'Righttt');

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
    const sortArr = [];
    console.log(leftArr + " ========leftArr");
    console.log(rightArr + " =====rightArr");

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortArr.push(leftArr.shift())
        } else {
            sortArr.push(rightArr.shift())
        }
    }
    console.log(leftArr + " ---------------leftArr");
    console.log(rightArr + " -----------rightArr");
    console.log("sort arr ----------------" + sortArr);
    return [...sortArr, ...leftArr, ...rightArr];

}

const arr = [2, 1, 9, 76, 4, -6]

console.log(mergeSort(arr));