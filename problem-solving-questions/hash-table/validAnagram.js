class HashTable {
  constructor() {
    this.table = new Array(127); 
    this.size = 0; 
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  get(key) {
    const target = this._hash(key);
    if (this.table[target]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[target][i][0] === key) {
          return this.table[target][i][1];
        }
      }
    }
    return undefined;
  }
}

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false; 
    let sHash = new HashTable()._hash(s); 
    let tHash = new HashTable()._hash(t);
    console.log(sHash, tHash);

    for(let i = 0; i < s.length; i++) {
        if(sHash.get(s[i]) !== tHash.get(s[i])) return false; 
    }
    return true; 
};