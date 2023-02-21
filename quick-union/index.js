import QuickUnion from "./QuickUnion.js";

var quSample = new QuickUnion(20000); 

quSample.union(0,9); 
quSample.union(9,12);


console.log(quSample.isConnected(0,12))