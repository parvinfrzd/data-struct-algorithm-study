//Problem: Dynamic connectivity 
//Approach: So called Eager Approach: Quick-find

export default class QuickFind {
    // id = []; 
    
    // QuickFindUF  = (n) => {
    //     id = [n];
    //     for ( var i = 0; i < n ; i++) {
    //         id[i] = i
    //     }
    // }

    constructor(n) {
        this.id = [];
        for(let i = 0; i < n; i++ ) {
            this.id[i] = i;
        }
        this.counter = n;
    }

    isConnected = (p,q) => {
        return id[p] === id[q];
    }

    union = (p,q) => {
        const pId = this.find(p); 
        const qId = this.find(q); 
        for (var i = 0; i < this.id.length; i++){
            if(this.id[i] == pId) this.id[i] = qId;
        }
    }

    find = (p) => {
        return this.id[p];
    }
}