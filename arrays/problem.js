let arr = [6,7,1,3,8]
let largest = arr[0]
let smallest = arr[0]
let secondL=arr[0]
for (let i = 0; i < arr.length; i++) {
    if(arr[i]>largest){
        largest=arr[i]
        
    }
   
    if(arr[i]<smallest){
        smallest = arr[i]
    }
   
    
    
}console.log(smallest,largest,secondL);
let sum = largest+smallest
console.log(sum);
arr.push(sum)
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i]>largest) {
        secondL = largest
        largest =arr[i]
    }
    
}
console.log(secondL,'k');
