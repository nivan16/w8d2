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

const arr2 = [1,2,2,3,4,4,5];
console.log(arr2.uniq());

Array.prototype.twoSum = function (){
    const ans = [];

    idx1 = function (num, index1){
        idx2 = function (num, index2) {
            if(this[] ){

            }
        };
    };

};