function areThereDuplicates(...args) {
    var argsArray = Array.from(args).sort((a , b) => { return a - b}); 
    let i = 0; 
    for (let j = i + 1 ; j < argsArray.length; j ++) {
        console.log(j);
        if( argsArray[i] === argsArray[j]) {
            console.log(argsArray[i]) 
        }
    }
}

console.log(areThereDuplicates(1, 1, 3, 0, 4, 5));