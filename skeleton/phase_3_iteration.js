Array.prototype.bubbleSort = function () {
    let sorted = false;

    while (!sorted) {
        sorted=true;
        for (let i = 0; i < this.length; i++){
            if (this[i]>this[i+1]){
                sorted=false;
                const temp = this[i];
                this[i] = this[i+1];
                this[i+1] = temp;
            }
        }
    }
    return this;

};

// const arr = [20, 16, 15, 8, 11];
// console.log(arr.bubbleSort());

String.prototype.substrings = function () {
    let ans = [];

    for (let i=0; i<this.length; i++){
        for (let j=i+1; j<=this.length; j++){
            ans.push(this.slice(i,j));
        }
    }
    return ans;
};

let string = "Hello World!";
console.log(string.substrings());