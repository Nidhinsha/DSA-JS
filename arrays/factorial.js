// function factorail(n) {
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {

//         fact = fact*i
//     }
//     return fact
// }
// console.log(factorail(5));
// function facto(n) {
//     let fact=1
//     for (let i = 1; i <= n; i++) {
//        fact=fact*i
        
//     }
// }
console.log(fact(5));

function fact(n) {
    if (n==2) {
        return 2
    } else {
        return n*fact(n-1)
    }
}

//fibannachi
