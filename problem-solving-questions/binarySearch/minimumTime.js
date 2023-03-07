//Brute Force

// var minimumTime = function(time, totalTrips) {
//     if(time.length === 0) return undefined;
//     if(totalTrips === 0) return 0;
//     var currentTime = 0;
//     while(true) {
//         var currentTrips = 0;
//         for(let i = 0; i < time.length; i++) {
//             currentTrips += Math.floor(currentTime / time[i]);
//         }
//         if(currentTrips >= totalTrips) break; 
//         currentTime ++;
//     }

//     return currentTime; 

// };


// Binary Search 

var minimumTime = function(time, totalTrips) {
    var currentTime = 0; 
    var maxTime = time[time.length-1] * totalTrips; 
    var canDoTripsInMid = function(middle) {
        var currentTrips = 0; 
        for(let i = 0; i < time.length; i++) {
            currentTrips += Math.floor(middle / time[i]); 
        }
        return currentTrips >= totalTrips; 
    }

    while(currentTime < maxTime) {
        var mid = Math.floor((currentTime + maxTime) / 2); 
        if(canDoTripsInMid(mid)) {
            maxTime = mid;
        } else {
            currentTime = mid + 1; 
        }
    }
    return currentTime; 

};