/* 
    SOCK MERCHANT
    difficulty: easy
    description: 
           John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
                For example, there are n=7 socks with colors ar=[1, 2, 1, 2, 1, 3, 2] . There is one pair of color 1 and one of color 2 . There are three odd socks left, one of each color. The number of pairs is 2.
*/
var sockMerchant = function (n, ar) {
    let sortedArr = ar.sort(function(a, b) {
      return a - b;
    });
    let pairs = 0; 

    for(let i = 0; i < n; i++) {
        if(sortedArr[i] === sortedArr[i+1]) {
            pairs ++; 
            i += 1; 
        }
    }
    return pairs; 
}

/*
  INTEGER TO ROMAN 
  diffculty: medium 
  description: leetcode 
*/

var intToRoman = function(num) {
  const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
  let result = ''; 

  for(let i = 0; i < val.length; i++) {
    while( num >= val[i]) {
      result += rom[i]; 
      num -= val[i];
    }
  } 
  return result;
};

/* 
  ROMAN TO INT 
  difficutly: medium 
  description: leetcode 
*/

var romanToInt = function(s = '') {
  hash = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }; 
  let result = 0; 
  for (let i = 0; i < s.length; i++) {
    if(i+1 < s.length && hash[s[i]] < hash[s[i+1]]) {
        result -= hash[s[i]]; 
    } else {
      result += hash[s[i]]; 
    }
  }

  return result

};

/* 
  SWITCH PAIRS IN ARRAY 
  difficulty: easy 
  solutions: splice and deconstruct 
*/

var swapElements = function(arr) {
  let newArr = []; 
  for(let i = 0; i < arr.length; i+=2) {
    if(i === arr.length - 1) {
      newArr.push(arr[i]); 
    } else {
      newArr.push(arr[i+1]);
      newArr.push(arr[i]); 
    }
  }
  return newArr; 
}
