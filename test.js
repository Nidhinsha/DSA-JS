// class Node{
//     constructor(){
//         this.keys = new Map()
//         this.end = false
//     }
//     setEnd(){
//         this.end = true
//     }
//     isEnd(){
//         return this.end
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new Node()
//     }
//     add(input,node=this.root){
//         if (input.length ===0) {
//             node.setEnd()
//             return 
//         }else if(!node.keys.has(input[0])){
//             node.keys.set(input[0],new Node())
//             return this.add(input.substr(1),node.keys.get(input[0]))
//         }else{
//             return this.add(input.substr(1),node.keys.get(input[0]))
//         }
//     }
//     suggest(prefix){
//         node = this.root
//         let n= prefix.length
//         let current =''
//         while (n>3) {
            
//             for (let i = 0; i < prefix.length; i++) {
//                 if (!node.keys.prefix[i]) {
//                     return []
//                 }
//                    node = node.keys.prefix[i]
//                    current +=
//                 }
//         }
        
//     }
// }

// const myTrie = new Trie()
// myTrie.add("hai")
// myTrie.add("hello")
// myTrie.add("hey")
// n  of aray
// real life example