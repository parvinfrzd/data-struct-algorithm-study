var maxProfit = function(prices) {
  let maxProfit = 0; 
  let left = 0;
  let right = 0; 
  while(right < prices.length) {
    if(prices[left] < prices[right]) {
      let currProfit = prices[right] - prices[left]; 
      maxProfit = Math.max(currProfit, maxProfit); 
    } else {
      left = right; 
    }

    right ++; 
  }
  return maxProfit; 
}