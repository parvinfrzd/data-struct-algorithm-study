function validFrequency(string1, string2){
    const arr1 = string1.split('');
    const arr2 = string2.split('');
    
    if( arr1.length !== arr2.length) return false;
    
    var frequencyCounter1 = {};
    var frequencyCounter2 = {};
    
    arr1.forEach((char) => {
        frequencyCounter1[char] = ( frequencyCounter1[char] || 0 ) + 1;
    })
    
    arr2.forEach((char) => {
        frequencyCounter2[char] = ( frequencyCounter2[char] || 0 ) + 1;
    })
    
    for( var key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }
    
    return true; 
}


console.log(validFrequency('', '')) // true
console.log(validFrequency('aaz', 'zza')) // false
console.log(validFrequency('anagram', 'nagaram')) // true
console.log(validFrequency("rat","car")) // false) // false
console.log(validFrequency('awesome', 'awesom')) // false
console.log(validFrequency('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validFrequency('qwerty', 'qeywrt')) // true
console.log(validFrequency('texttwisttime', 'timetwisttext')) // true