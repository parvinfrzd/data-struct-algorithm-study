var topKFrequent = function(nums, k) {
  var sortObject = function(obj) {
      let sortable = [];
      for (var key in obj) {
          sortable.push([key, obj[key]]);
      }

      sortable.sort(function(a, b) {
          return b[1] - a[1];
      });

      console.log(sortable)

      return sortable; 
  }

  var getFirstElement = function(obj, k) {
      var arr = sortObject(obj);
      arr = arr.splice(0, k);
      for (let i=0; i < arr.length; i++) {
          arr[i].pop();
      }
      return arr; 
  }

  let map = {};
  for (let i = 0; i < nums.length; i++) {
      if(!map[nums[i]]) map[nums[i]] = 1; 
      else map[nums[i]] ++; 
  }

  return getFirstElement(map, k);
};