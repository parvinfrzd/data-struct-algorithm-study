var addTwoNumbers = function(l1, l2) {
  if(l1.length === 0) return l2; 
  if(l2.length === 0) return l1; 
   var num1 = '', num2 = ''; 
   const toNumber = (l) => {
       let num = ''; 
       for(let i = 0; i < l.length; i++){
           num = num.concat(l[i].toString());
       }

       return parseInt(num);
   }
  
   num1 = toNumber(l1); 
   num2 = toNumber(l2); 
   var total = num1 + num2; 
   return String(total) .split('') .map(Number);
};


console.log(addTwoNumbers([1,1,1,1,1],[5,5]))

// linked list solution 
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const addTwoNumbersInListNode = function(l1, l2) {
  let sum = 0; 
  let current = new ListNode(0); 
  let result = current; 
  
  while(l1 || l2) {
    if(l1) {
      sum += l1.val; 
      l1 = l1.next; 
    }
    if(l2) {
      sum += l2.val; 
      l2 = l2.next; 
    }

    current.next = new ListNode(sum % 10); 
    current = current.next; 

    sum = sum > 9 ? 1 : 0; 
  }

  if(sum) {
    current.next = new ListNode(sum); 
  }

  return result.next; 
}