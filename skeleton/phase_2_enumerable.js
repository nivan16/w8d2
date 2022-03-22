Array.prototype.myEach = function (func) {
    for (let i=0; i<this.length;i++){
        func(this[i]);
    }
};

function addOne (num) {
    console.log(num+1);
}

// const array = [1,2,3];
// console.log(array.myEach(addOne));

Array.prototype.myMap = function (funct){
    let ans = [];
    for(let i = 0; i < this.length; i++){
        ans.push(funct(this[i]));
    }
    return ans;
};
const array = [1,2,3];
// console.log(array.myMap(addOne));

Array.prototype.myReduce = function(acc, el) {
    if (el) {  acc = el; }

    for (let i = 0; i < this.length; i++) {
            acc += this[i];
    }
    return acc;
};

// console.log(array.myReduce(0));



