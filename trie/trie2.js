class Node {
    // Node class to store characters in trie
    constructor() {
        this.keys = new Map() // Map to store the children of current node
        this.end = false // boolean value to indicate if current node is end of word
    }

    setEnd() {
        // function to set end of word at current node
        this.end = true
    }

    isEnd() {
        // function to check if current node is end of word
        return this.end
    }
}

class Trie {
    // Trie class to store words
    constructor() {
        this.root = new Node() // root node
    }

    add(input, node = this.root) {
        // function to add word to trie
        // input: word to be added
        // node: current node, default is root node
        if (input.length === 0) {
            // if word is empty, set end of word at current node
            node.setEnd()
            return
        } else if (!node.keys.has(input[0])) {
            // if current node does not have the first letter of word as child
            // add the first letter as child of current node
            node.keys.set(input[0], new Node())
            return this.add(input.substr(1), node.keys.get(input[0]))
        } else {
            // if current node already has the first letter as child,
            // go to the next node and repeat the process
            return this.add(input.substr(1), node.keys.get(input[0]))
        }
    }

    isWord(word) {
        // function to check if a word exists in trie
        // word: word to be checked
        let node = this.root // start from root node
        while (word.length > 1) {
            // while word is not empty
            if (!node.keys.has(word[0])) {
                // if current node does not have the first letter of word as child, return false
                return false
            } else {
                // if current node has the first letter of word as child, go to the next node
                node = node.keys.get(word[0])
                word = word.substr(1)
            }
        }
        return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false
        // return true if current node has the last letter of word as child and it is end of word, else false
    }

    print() {
        // function to get all words stored in trie
        let words = new Array() // array to store words
        function search(node = this.root, string) {
            // recursive function to traverse the trie
            // node: current node, default is root node
            // string: current word formed while traversing
            if (node.keys.size !== 0) {
                // if current node has children
                for (let letter of node.keys.keys()) {
                    // for each child of current node
                    // repeat the process for current child
                    search(node.keys.get(letter), string.concat(letter))
                }

                if (node.isEnd()) {
                    word.push(string)
                }
            } else {
                string.length > 0 ? word.push(string) : undefined
                return
            }
        }
        search(this.root, new String())
        return word.length > 0 ? word : null
    }
}

const myTrie = new Trie()
myTrie.add('ball')
myTrie.add('bat')
myTrie.add('doll')
myTrie.add('dork')
myTrie.add('do')
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')
myTrie.add('hello')
console.log(myTrie.isWord('doll'));
console.log(myTrie.isWord('dor'));
console.log(myTrie.isWord('dorf'));
console.log(myTrie.print());