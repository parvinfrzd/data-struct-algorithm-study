var sum = function (arr) {
  let total = 0; 
  for(let i = 0; i < arr.length; i++) {
      total += arr[i];
  }
  return total; 
}

var shipWithinDays = function(weights, days) {
  var goodToPackage = function(weightLimit) {
      var counter = 1; //starts from one day
      var total = 0;
      for(let i = 0; i < weights.length; i++) { 
          total += weights[i]; 
          if(total > weightLimit) {
              counter ++;
              total = weights[i];
          }
      }
      return counter <= days; 
  }

  var minWeightCapacity = Math.max(...weights); 
  var maxWeightCapacity = sum(weights);

  while(minWeightCapacity < maxWeightCapacity) {
      var mid = Math.floor((minWeightCapacity + maxWeightCapacity) / 2); 
      if(!goodToPackage(mid)) {
          minWeightCapacity = mid + 1; 
      } else {
          maxWeightCapacity = mid; 
      }
  }

  return minWeightCapacity; 
};