var longestConsecutive = function(nums) {
  let numSet = new Set(nums);
  let longest = 0; 
  for (let i = 0; i < nums.length; i ++) {
      if(!numSet.has(nums[i]-1)) {
          let length = 0; 
          while(numSet.has(nums[i] + length)){
              length ++; 
          }
          longest = Math.max(length, longest); 
      }
  }

  return longest; 
};