var minEatingSpeed = function(piles, h) {
  var canEatBananas = function(perHourSpeed) {
      var counter = 0;
      for (let i = 0; i < piles.length; i++) {
          counter += Math.floor((piles[i] + perHourSpeed - 1)/perHourSpeed);
      }
      return counter <= h; 
  }

  minSpeed = 1; 
  maxSpeed = Math.max(...piles); 

  while(minSpeed < maxSpeed) {
      mid = Math.floor((minSpeed + maxSpeed) / 2); 

      if(canEatBananas(mid)) {
          maxSpeed = mid; 
      } else {
          minSpeed = mid + 1; 
      }
  }

  return minSpeed;
};