
//TIME EXCEEDS ON LONG ARRAYS IN THIS ONE
var productExceptSelf = function(nums) {
  var multiplyElementsExceptSelf = function (arr, index) {
      var result = 1; 
      arr.splice(index,1);
      arr.forEach((el) => {
          result *= el; 
      }); 
      return result; 
  }

  var results = [];
  var copy = [...nums];
  var i = 0;
  while(i < nums.length) {
      results.push(multiplyElementsExceptSelf(copy, i));
      copy = [...nums]; 
      i ++; 
  }

  return results;

};

//THE RIGHT ALGORITHM 

var productExceptSelf = function(nums) {
  let n = nums.length; 
  let result = new Array(n).fill(1); 

  let prefix = 1; 
  for( let i = 0; i < n; i++) {
      result[i] = prefix; 
      prefix *= nums[i];
  } 

  let suffix = 1; 
  for( let i = n-1 ; i >= 0; i --) {
      result[i] *= suffix; 
      suffix *= nums[i];
  }

  return result;

};

