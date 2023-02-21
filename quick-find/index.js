import QuickFind from "./QuickFind.js";

var ufSample = new QuickFind(10);

ufSample.union(0,8);
ufSample.union(8,2);

console.log(ufSample)