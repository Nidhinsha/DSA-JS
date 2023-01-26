// let str = 'hello'
// let reversed=''
// for (let i = str.length-1;  i>=0; i--) {
//     reversed+=str[i]
    
// }
// console.log(reversed);


let str = 'malayalm'
let pallindrome = true
for (let i = 0; i < str.length/2; i++) {
   if (str[i]!==str[str.length-1-i]) {
    pallindrome = false
    break
   }
    
}
if(pallindrome){
    console.log('it is palindrome');
}else{
    console.log('not pallindrome');
}

