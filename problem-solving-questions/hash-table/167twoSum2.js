/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let map = new Map(); 

  for(let i = 0; i < numbers.length; i ++) {
      let diff = target - numbers[i]; 

      if(map.has(diff))
          return [i+1, map.get(diff)].sort((a, b) => {
              return a - b
          }); 
      
      map.set(numbers[i], i+1);
  }
};