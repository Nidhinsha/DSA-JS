function factorial(n) {
    if(n==2 ){
        return 2
    }else{
        return n*factorial(n-1)
    }
}
console.log(factorial(5));

// function fcto2(n) {
//     if (n==2) {
//         return 2
//     } else {
//         return n*fcto2(n-1)
//     }
// }