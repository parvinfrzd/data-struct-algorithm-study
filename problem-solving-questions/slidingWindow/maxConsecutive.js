var longestOnes = function(nums, k) {
  var getWindowLength = function(index) {
      let zeroCounter = 0; 
      let windowSize = 0; 
      for(let i = index; i < nums.length; i++) {
          if(nums[i] === 0) zeroCounter ++; 
          if(zeroCounter > k) break;
          windowSize ++;
      }
      return windowSize; 
  }

  let index = 0; 
  let maxConsecutive = 0; 
  while(index < nums.length) {
      if(maxConsecutive < getWindowLength(index)) 
          maxConsecutive = getWindowLength(index); 
      index ++; 
  }

  return maxConsecutive; 
};