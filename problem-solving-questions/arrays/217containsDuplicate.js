var containsDuplicate = function(nums) {
  let duplicates = {}; 
  for(let i = 0; i < nums.length; i++) {
      if(duplicates.hasOwnProperty(nums[i])) return true;
      else duplicates[nums[i]] = 1;   
  }    
  return false;
};