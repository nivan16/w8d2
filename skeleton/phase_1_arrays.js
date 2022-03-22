 // const ans = [];
    // for (let i = 0; i < this.length; i++) {
    //     if( !(ans.includes(this[i]))) {
    //         ans.push(this[i]);
    //     }
    // }
    // return ans;
Array.prototype.uniq = function() {
    const ans = [];

    function sort(num){
        if (!ans.includes(num)){
            ans.push(num);
        }
    }
    this.forEach(sort);
    return ans;

};

// const arr2 = [1,2,2,3,4,4,5];
// console.log(arr2.uniq());

Array.prototype.twoSum = function (){
    const ans = [];
    for(let i=0;i < this.length;i++) {
        for(let j = i+1; j < this.length; j++) {
            if(this[i]+this[j] === 0 ) {
                ans.push([i, j]);
            }
        }
    }
    // idx1 = function (num, index1, arr){
    //     idx2 = function (num, index2, arr) {
    //         if( (arr[index1] + arr[index2] === 0) && (index2 > index1) ){
    //             ans.push([index1, index2]);
    //         }
    //     };
    // };

    return ans;

};
// const arr3 = [1,-1,-2,-3,3];
// console.log(arr3.twoSum());


Array.prototype.transpose = function () {
    // let ans = new Array(this[0].length).fill(new Array(this.length));
    // let ans = [[],[],[]];
    let ans = [];
    for(let k = 0;k < this[0].length;k++){
        ans.push([]);
    }

    for(let i = 0; i < this.length; i++){
        for(let j = 0; j < this[0].length; j++){
            ans[j][i] = this[i][j];   
        }
    }
    return ans;
};
// const arr4 = [[1,2,3], [4,5,6]];
// console.log(arr4.transpose());

