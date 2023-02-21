class Node {
  constructor(value) {
    this.value = value; 
    this.next = null; 
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail; 
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
    var poppedNode = this.tail; 
    if(this.length === 0) return undefined;
    if(this.length === 1) {
      this.head = null; 
      this.tail = null; 
    } else {
      this.tail = poppedNode.prev; 
      this.tail.next = null; 
      poppedNode.prev = null;  
    }
    this.length --;
    return poppedNode; 
  }

  shift() {
    if(this.length === 0) return undefined; 
    if(this.length === 1) {
      this.head = null; 
      this.tail = null; 
    } else {
      var current = this.head; 
      this.head = current.next; 
      this.head.prev = null; 
      current.next = null; 
    }
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
      this.head.prev = newNode;
      this.head = newNode; 
    }
    this.length ++; 
    return this; 
  }

  get(index) {
    if(index < 0 || index >= this.length) return null; 
    var counter; 
    var current = this.head; 
    if(index < this.length / 2) {
      counter = 0; 
      current = this.head; 
      while (counter !== index) {
        current = current.next;
        counter ++; 
      }
    } else {
      counter = this.length - 1; 
      current = this.tail; 
      while(counter !== index) {
        current = current.prev; 
        counter --;
      }
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
    if(index === 0) return !!this.unshift(value); 
    else if(index === this.length) return !!this.push(value); 
    else {
      var newNode = new Node(value); 
      var prev = this.get(index-1);
      var next = prev.next; 

      prev.next = newNode; 
      newNode.next = next; 
      newNode.prev = prev; 
      next.prev = newNode; 
      this.length++;
    }
    return true;
  }

  remove(index) {
    if(index < 0 || index > this.length) return undefined; 
    if(index === 0) return this.shift(); 
    if(index === this.length) return this.pop(); 
    
    var removedNode = get(index); 
    var prevNode = removedNode.prev; 
    var nextNode = removedNode.next; 

    removedNode.next = null; 
    removedNode.prev = null; 
    prevNode.next = nextNode; 
    nextNode.prev = prevNode; 

    this.length --; 
    return removedNode;
  }

  reverse() {
    var temp = null; 
    var current = this.head; 

    while(current) {
      temp = current.prev; 
      current.prev = current.next; 
      current.next = temp; 
      current = current.prev; 
    }

    if(temp != null) {
      this.head = temp.prev; 
    }
    
    return this;
  }
}