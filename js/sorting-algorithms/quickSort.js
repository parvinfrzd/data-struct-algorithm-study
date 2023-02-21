

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr) {
  let pivot = arr[arr.length-1];
  let swapIndex = -1; //lowest element index

  for(let i = swapIndex ; i <= arr.length-1; i ++) {
    if(arr[i] < pivot) {
      swapIndex ++; 
      swap(arr, swapIndex, i)
    }
  }
  swap(arr, arr.length - 1, swapIndex + 1);

  return swapIndex + 1;
}

function quickSort ( arr, start, end) {
    if(start < end) {
      let pivotIndex = partition(arr); 
  
      quickSort(arr, start, pivotIndex - 1); 
      quickSort(arr, pivotIndex + 1, end); 
    }
    return arr;
}


console.log(quickSort([10, 80, 30, 90, 40, 50, 70], 0, 6));