class Node{
    constructor(){
        this.keys = new Map()
        this.end= false
    }
    setEnd(){
        this.end = true
    }
    isEnd(){
        return this.end
    }
}

class Trie7{
    constructor(){
        this.root = new Node()
    }
    add(input,node = this.root){
        if(input.length ===0){
            node.setEnd()
            return
        }
        if (!node.keys.has(input[0])) {
            node.keys.set(input[0], new Node())
            return this.add(input.substr(1),node.keys.get(input[0]))
        }else{
            return this.add(input.substr(1),node.keys.get(input[0]))
        }
    }
    isWord(word){
        let node = this.root
        while (word.length > 1) {
            if (!node.keys.has(word[0])) {
                return false
            }else{
                node = node.keys.get(word[0])
                word = word.substr(1)
            }
        }
        return (
            node.keys.has(word) && node.keys.get(word[0]).isEnd()
        )
    }
    print(){
        let word = new Array()
        function search(node = this.root,string){
            if (node.keys.size != 0) {
                for (let letter of node.keys.keys()) {
                    search(node.keys.get(letter),string.concat(letter))
                }

                if(node.isEnd()){
                    word.push(string)
                }
            }else{
                string.length > 0 ? word.push(string) : undefined
                return
            }
        }
        search(this.root,new String)
        return word.length >1 ? word : null
    }
}

const myTrie7 = new Trie7()
myTrie7.add('ball')
myTrie7.add('bat')
myTrie7.add('doll')
myTrie7.add('dork')
myTrie7.add('do')
myTrie7.add('dorm')
myTrie7.add('send')
myTrie7.add('sense')
myTrie7.add('hello')

console.log(myTrie7.isWord('doll'));
console.log(myTrie7.isWord('dor'));
console.log(myTrie7.isWord('dorf'));
console.log(myTrie7.print());