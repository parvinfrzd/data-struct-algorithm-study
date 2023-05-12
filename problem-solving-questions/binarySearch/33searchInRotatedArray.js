var search = function(nums, target) {
  if(nums.length === 1 && nums[0] === target) return 0;
  let index = 0; 
  while (index < nums.length) {
      if( nums[index] === target) return index; 
      index ++;
  }
  return -1;
};