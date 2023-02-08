function insert(arr,n) {
    let i = n
    let temp = arr[i]
    while (i>0 && temp < arr[Math.floor((i-1)/2)] ) {
        arr[i] = arr[Math.floor((i-1)/2)]
        i = Math.floor((i-1)/2)
    }
    arr[i] = temp
}

const arrHeap = [10,60,45,77,32,11]
for (let i = 0; i < arrHeap.length; i++) {
    insert(arrHeap,i)
}
console.log(arrHeap);