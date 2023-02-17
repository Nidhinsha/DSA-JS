class Node{
    constructor(){
        this.keys= new Map()
        this.end = false
    }
    setEnd(){
        this.end = true
    }
    isEnd(){
        return this.end
    }

}
class Trie6{
    constructor(){
        this.root = new Node()
    }
    add(input,node = this.root){
        if(input.length ===0){
            node.setEnd()
            return 
        }
       else if (!node.keys.has(input[0])) {
            node.keys.set(input[0],new Node())
            return this.add(input.substr(1),node.keys.get(input[0]))
        }else{
            return this.add(input.substr(1),node.keys.get(input[0]))
        }
    }
    isWord(word){
        let node =this.root
        while(word.length > 1){
            if(!node.keys.has(input[0])){
                return false
            }else{
                node = node.keys.get(word[0])
                word = word.substr(1)
            }
        }
        return (
            node.keys.has(word) && node.keys.get(word).isEnd()
        )
    }
}
