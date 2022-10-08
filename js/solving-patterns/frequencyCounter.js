function validFrequency(string1, string2){
    const arr1 = string1.split('');
    const arr2 = string2.split('');
    
    if( arr1.length !== arr2.length) return false;
    
    var frequencyCounter1 = {};
    var frequencyCounter2 = {};
    
    for ( var char1 in arr1) {
        frequencyCounter1[char1] = ( frequencyCounter1[char1] || 0) + 1;
    }
    
    for ( var char2 in arr2) {
        frequencyCounter2[char2] = ( frequencyCounter2[char2] || 0) + 1;
    }
    
    for( var key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }
    
    return true; 
}


console.log(validFrequency('amanaplanacanalpanama', 'acanalmanplanpamana'));