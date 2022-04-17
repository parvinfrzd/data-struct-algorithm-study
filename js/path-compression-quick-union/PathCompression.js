export default class PathCompressQuickUnion {
    constructor (n) {
        this.id = []; 
        this.size = [];
        for (var i = 0; i < n; i++) {
            this.id[i] = i;
            this.size[i] = 1;
        }
    }

    root = (i) => {
        while( i !== this.id[i])
        {
            this.id[i] = this.id[this.id[i]];
            i = this.id[i];
        } 
        return i;
    }

    isConnected = (p,q) => {
        return this.root(p) === this.root(q);
    }

    union = (p,q) => {
        const pid = this.root(p); 
        const qid = this.root(q);
        if( pid === qid) return; 
        if(this.size[pid] < this.size[qid]) {
            this.id[pid] = qid;
            this.size[qid] += this.size[pid];
        }
        else {
            this.id[qid] = pid;
            this.size[pid] += this.size[qid];
        }
    }
}