
//brute force 
var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
          if(nums[j] === target - nums[i]) {
              return [i, j];
          }
      }
  }

  return undefined; 
};

//hash table 

var twoSum = function(nums, target) {
    var result = new Map(); 

    for(let i = 0; i < nums.length; i ++) {
        var diff = target - nums[i]; 

        if(result.has(diff)) 
            return [i, result.get(diff)]
        
        result.set(nums[i], i);
    }
};
