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