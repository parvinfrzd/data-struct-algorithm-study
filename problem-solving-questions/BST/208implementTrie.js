class TrieNode {
  constructor() {
  this.children = {}
  this.endWord = false
  }
}

var Trie = function() {
  this.root = new TrieNode()
};

Trie.prototype.insert = function(word) {
  let curr = this.root
  for(let cha of word) {
      if(!curr.children[cha]) {
           curr.children[cha] = new TrieNode()
      } 
      curr = curr.children[cha]
  }
  curr.endWord = true
};

Trie.prototype.search = function(word) {
  let curr = this.root
  for(let cha of word) {
      if(!curr.children[cha]) {
          return false
      }
      curr = curr.children[cha]
  }
  return (curr.endWord == true) ? true : false
};

Trie.prototype.startsWith = function(prefix) {
  let curr = this.root
  for(let cha of prefix) {
      if(!curr.children[cha]) {
          return false
      }
      curr = curr.children[cha]
  }
  return true
};

Trie.prototype.delete = function(word) {
    let currentNode = this.root;
    let lastBranchNode = null;
    let lastBrachChar = 'a';
  
    for (let c of word) {
        if (currentNode.childNode === null) {
            return false;
        } else {
            let count = 0;
            for (let i = 0; i < 26; i++) {
                if (currentNode.childNode[i] !== null) {
                    count++;
                }
            }
  
            if (count > 1) {
                lastBranchNode = currentNode;
                lastBrachChar = c;
            }
            currentNode = currentNode.childNode;
        }
    }
  
    let count = 0;
    for (let i = 0; i < 26; i++) {
        if (currentNode.childNode[i] !== null) {
            count++;
        }
    }
  
    // Case 1: The deleted word is a prefix of other words
    // in Trie.
    if (count > 0) {
        currentNode.wordCount--;
        return true;
    }
  
    // Case 2: The deleted word shares a common prefix with
    // other words in Trie.
    if (lastBranchNode !== null) {
        lastBranchNode.childNode[lastBrachChar] = null;
        return true;
    }
    // Case 3: The deleted word does not share any common
    // prefix with other words in Trie.
    else {
        root.childNode[word[0].charCodeAt(0) - 'a'.charCodeAt(0)] = null;
        return true;
    }
};

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/