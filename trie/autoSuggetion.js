class TrieNode {
    constructor() {
      this.children = new Map();
      this.endOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let current = this.root;
      for (let i = 0; i < word.length; i++) {
        let ch = word.charAt(i);
        let node = current.children.get(ch);
        if (!node) {
          node = new TrieNode();
          current.children.set(ch, node);
        }
        current = node;
      }
      current.endOfWord = true;
    }
  
    search(word) {
      let current = this.root;
      for (let i = 0; i < word.length; i++) {
        let ch = word.charAt(i);
        let node = current.children.get(ch);
        if (!node) {
          return false;
        }
        current = node;
      }
      return current.endOfWord;
    }
  
    startsWith(prefix) {
      let current = this.root;
      for (let i = 0; i < prefix.length; i++) {
        let ch = prefix.charAt(i);
        let node = current.children.get(ch);
        if (!node) {
          return [];
        }
        current = node;
      }
      return this.findAllWords(current, prefix);
    }
  
    findAllWords(node, prefix) {
      let words = [];
      if (node.endOfWord) {
        words.push(prefix);
      }
      for (let [ch, childNode] of node.children) {
        words.push(...this.findAllWords(childNode, prefix + ch));
      }
      return words;
    }
  }
  
  // Example usage
  const trie = new Trie();
  trie.insert("apple");
  trie.insert("banana");
  trie.insert("cherry");
  trie.insert("date");
  trie.insert("grape");
  trie.insert("lemon");
  
  console.log(trie.startsWith("a")); // Output: ["apple"]
  console.log(trie.startsWith("b")); // Output: ["banana"]
  console.log(trie.startsWith("c")); // Output: ["cherry"]
  console.log(trie.startsWith("d")); // Output: ["date"]
  console.log(trie.startsWith("g")); // Output: ["grape"]
  console.log(trie.startsWith("l")); // Output: ["lemon"]
  console.log(trie.startsWith("e")); // Output: []
  

  //  autocomplete(fragment) {
  //   if (!fragment) { return; }
  //   let result = [];
  //   let n = this.root;
  //   for (let i = 0; i < fragment.length; i++) {
  //     const c = fragment[i];
  //     if (!n.children.hasOwnProperty(c)) {
  //       break;
  //     }
  //     n = n.children[c];
  //     if (i === fragment.length - 1) {
  //       const queue = [];
  //       queue.push([n, fragment]);
  //       while (queue.length) {
  //         const element = queue.shift();
  //         const node = element[0];
  //         const word = element[1];
  //         if (node.isWord) {
  //           result.push(word)
  //         }
  //         for (const j in node.children) {
  //           const child = node.children[j];
  //           queue.push([child, word + child.value]);
  //         }
  //       }
  //     }
  //   }
  //   return result;
  // }