var searchInsert = function(nums, target) {
    if(nums.length === 0) return undefined; 
    let i = Math.floor(nums.length/2);
    if(nums[i] === target) return i; 
    if(nums[i] > target) {
      while(nums[i] !== target) {
        i--; 
      }
    } else {
      while(nums[i] !== target) {
        i++; 
      }
    }
    console.log(i)
    return i; 
};


searchInsert([1,2,3,5,7], 5);