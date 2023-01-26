function prime(n) {
    for (let i = 2; i < n; i++) {
        if (n%i===0) {
           return false
        } else {
           return  true
        }
        
    }
}
console.log(prime(4));