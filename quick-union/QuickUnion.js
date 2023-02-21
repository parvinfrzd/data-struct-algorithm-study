export default class QuickUnion {
    constructor (n) {
        this.id = []; 
        for (var i = 0; i < n; i++) {
            this.id[i] = i;
        }
    }

    root = (i) => {
        while( i !== this.id[i]) i = this.id[i];
        return i;
    }

    isConnected = (p,q) => {
        return this.root(p) === this.root(q);
    }

    union = (p,q) => {
        const pid = this.root(p); 
        const qid = this.root(q);

        this.id[pid] = qid;
    }
}