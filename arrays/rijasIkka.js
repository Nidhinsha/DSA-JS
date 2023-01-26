function getValue(arr,target,i) {
       if (arr[i]+arr[i+1]==target) {
        console.log('done');
        return ([i,i+1])
       }else{
        return getValue(arr,target,i+1)
        console.log('not Done');
       }
    }



let arr = [1,2,3,4,5,6,7]
let target =7
console.log(getValue(arr,target,0));