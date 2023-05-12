var maxArea = function(height) {
  left = 0; 
  right = height.length-1; 
  res = 0; 

  while(right > left) {
      area = (right - left) * Math.min(height[left], height[right]); 
      res = Math.max(area, res); 
      height[left] > height[right] ? right -- : left ++;
  }    


  return res;
};