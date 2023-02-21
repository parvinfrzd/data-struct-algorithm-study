function merge(arr1, arr2) {
  var sortedArr = []; 
  var i = 0; 
  var j = 0; 
  while(i < arr1.length && j < arr2.length) {
    if(arr2[j] > arr1[i]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }
  while ( i < arr1.length) {
    sortedArr.push(arr1[i]); 
    i++;
  }

  while ( j < arr2.length) {
    sortedArr.push(arr2[j]); 
    j++;
  }
  return sortedArr;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));