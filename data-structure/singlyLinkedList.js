class Node {
  constructor(value) {
    this.value = value; 
    this.next = null; 
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null; 
    this.tail = null; 
    this.length = 0; 
  }

  push(value) {
    var newNode = new Node(value); 
    if(!this.head) {
      this.head = newNode; 
      this.tail = this.head; 
    } else {
      this.tail.next = newNode;
      this.tail = newNode; 
    }
    this.length ++; 
    return this; 
  }

  traverse() {
    var current = this.head; 

    while(current) {
      console.log(current.next); 
      current = current.next; 
    }
  }

  pop() {
    if(this.length === 0) return undefined; 
    var current = this.head; 
    var newTail = null; 

    while(current.next) {
      newTail = current; 
      current = current.next; 
    }

    this.tail = newTail; 
    this.tail.next = null; 
    this.length --; 

    if(this.length === 0 && this.head === this.tail) {
      this.head = null; 
      this.tail = null; 
    }

    return current; 
  }

  shift() {
    if(this.length === 0) return undefined; 
    var current = this.head; 
    this.head = current.next; 
    this.length --; 
    return current; 
  }

  unshift(value) {
    var newNode = new Node(value); 
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode; 
    } else {
      this.newNode.next = this.head; 
    }
    this.length ++; 
    return this; 
  }

  get(index) {
    if(index < 0 || index >= this.length) return null; 
    var counter = 0; 
    var current = this.head; 
    while(counter !== index) {
      current = current.next; 
      counter ++; 
    }
    return current; 
  }

  set(index, value) {
    var current = this.get(index); 
    if(!current) return false; 
    else {
      current.value = value; 
      return true; 
    }
  }

  insert(index, value) {
    if(index < 0 || index > this.length) return false; 
    var newNode = new Node(value); 
    if(index === 0) this.unshift(value); 
    else if(index === this.length) this.push(value); 
    else {
      var prev = this.get(index-1);
      var temp = prev.next; 
      prev.next = newNode; 
      newNode.next = temp; 
      prev.next = newNode; 
      this.length++;
    }
    return true;
  }

  remove(index) {
    if(index < 0 || index > this.length) return undefined; 
    if(index === 0) return this.shift(); 
    if(index === this.length) return this.pop(); 
    var prevNode = get(index-1);
    var nodeToRemove = get(index); 
    prevNode.next = nodeToRemove.next; 
    this.length --; 
    return nodeToRemove;
  }

  reverse() {
    var node = this.head; 
    this.head = this.tail; 
    this.tail = node; 

    var next; 
    var perv = null; 

    for(let i = 0; i < this.length; i++) {
      var next = node.next; 
      node.next = prev; 
      prev = node; 
      node = next; 
    }
    return this;
  }
}