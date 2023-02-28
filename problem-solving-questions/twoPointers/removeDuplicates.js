var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0; 
    let leftPointer = 0;
    let uniqueNums = [nums[leftPointer]];
    let count = 1; 

    for(let i = 1; i < nums.length; i++) {
      if (nums[leftPointer] !== nums[i]) {
        uniqueNums.push(nums[i]);
        leftPointer = i;
        count ++;
      } else {
        continue;
      }
    }

    for(let j = 0; j < nums.length - count; j++) {
      uniqueNums.push(-121);
    }

    return count; 
};

removeDuplicates([11,,1,2,2,3,3,3,4,4,4,4])