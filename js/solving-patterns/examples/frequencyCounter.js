// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)

const sameFrequency = (num1, num2) => {
    const arrOfStr1 = Array.from(String(num1));
    const arrOfStr2 = Array.from(String(num2));

    if(arrOfStr1.length !== arrOfStr2.length) return false; 

    const frequencyCounter1 = {};
    const frequencyCounter2 = {}; 
 

    arrOfStr1.forEach((char) => {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0 ) + 1;
    });

    arrOfStr2.forEach((char) => {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0 ) + 1;
    });

    for( var key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }

    return true; 

}
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false