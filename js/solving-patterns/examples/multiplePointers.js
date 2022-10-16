// Implement a function called, 
// areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Restrictions:
// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)
const areThereDuplicates = (...args) => {
    if(args.length <= 0) return false; 

    let leftIndex = 0;
    
    for (let i = 0; i < args.length; i++) {
        
        if (args[i] === args[leftIndex]) {
            console.log(i, leftIndex);

            if (leftIndex === i) {
                leftIndex++;
                continue;
            }
            return true; 
        }
        leftIndex++;

    }
    return false; 
}; 


console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true 