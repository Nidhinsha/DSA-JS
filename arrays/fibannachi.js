// function fibannachi(n) {
//     const fib = [0, 1]
//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     return fib
// }
// console.log(fibannachi(3));
// console.log(fibannachi(5));
// console.log(fibannachi(7));
function fib(n) {
   if (n<2) {
    return n
   }
   return fib(n-1)+fib(n-2)
}
console.log(fib(100));


