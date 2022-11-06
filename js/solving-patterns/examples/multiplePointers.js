// Implement a function called, 
// areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Restrictions:
// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)
const areThereDuplicates = (...args) => {
    args.sort((a , b) => { return a - b}); 
    let leftIndex = 0;
    let i = 1;
    while( i < args.length) {
        if (args[leftIndex] == args[i]) return true;
        leftIndex ++;
        i++;
    }
    return false;
}; 



console.log(areThereDuplicates(1, 2, 3, 4, 5, 6, 7, 8)); // false
console.log(areThereDuplicates(1, 2, 2)); // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true 