// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

function isSubsequence (string1, string2) {
    let arr1 = string1.split("");
    let arr2 = string2.split(""); 

    i = 0; 
    j = 0; 

    while (j < arr2.length && i < arr1.length) {
        if(arr1[i] !== arr2[j]) {
            j ++
        } else {
            i ++; 
            j ++;
        }
    }

    return ( i == arr1.length) ? true: false;


}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)