class TrieNode {
    constructor() {
      // An object to store the child nodes of the current node.
      this.children = {};
  
      // A boolean to indicate whether the current node represents the end of a word.
      this.isWord = false;
    }
  }
  
  class Trie {
    constructor() {
      // The root node of the Trie.
      this.root = new TrieNode();
    }
  
    insert(word) {
      // Start at the root node.
      let node = this.root;
  
      // Iterate over each character in the word.
      for (let i = 0; i < word.length; i++) {
        // If the child node for the current character does not exist, create it.
        if (!node.children[word[i]]) {
          node.children[word[i]] = new TrieNode();
        }
  
        // Move to the child node for the current character.
        node = node.children[word[i]];
      }
  
      // Set the isWord property of the last node in the word to true.
      // This indicates that the word is complete.
      node.isWord = true;
    }
  
    suggestHelper(root, list, curr) {
      // If the current node represents the end of a word, add the current prefix to the result list.
      if (root.isWord) {
        list.push(curr);
      }
  
      // If the current node has no children, return.
      if (!Object.keys(root.children).length) {
        return;
      }
  
      // Recursively call suggestHelper on each child node with the updated prefix.
      for (let child in root.children) {
        this.suggestHelper(root.children[child], list, curr + child);
      }
    }
  
    suggest(prefix) {
      // Start at the root node.
      let node = this.root;
  
      // Initialize the current prefix to an empty string.
      let curr = "";
  
      // Follow the child node for each character in the prefix.
      for (let i = 0; i < prefix.length; i++) {
        // If a child node for the current character does not exist, return an empty result array.
        if (!node.children[prefix[i]]) {
          return [];
        }
  
        // Move to the child node for the current character.
        node = node.children[prefix[i]];
  
        // Add the current character to the current prefix.
        curr += prefix[i];
      }
  
      // If all characters in the prefix are found in the Trie, call suggestHelper on the last node in the prefix.
      // Pass the result array and the full prefix to suggestHelper.
      let list = [];
      this.suggestHelper(node, list, curr);
  
      // Return the result array.
      return list;
    }
  }
  
  // Create a list of words to insert into the Trie.
  let words = ["hello", "dog", "hell", "cat", "a", "hel","help","helps","helping"];
  
  // Create a new instance of the Trie class.
  let trie = new Trie();
  
  // Insert each word in the list into the Trie.
  words.forEach((word) => trie.insert(word));
  
  // Call the suggest method with the prefix "hel" and print the results to the console.
  console.log(trie.suggest("hel"));
  