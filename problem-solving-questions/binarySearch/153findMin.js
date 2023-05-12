
var findMin = function(nums) {
  let n = nums.length - 1;
  if(nums[0] < nums[n]) return nums[0];
  
  let currentMin = nums[n]; 
  while (n > 0) {
    if(nums[n-1] < currentMin) {
        currentMin = nums[n-1];
    }
    n --; 
  }

  return currentMin; 
};