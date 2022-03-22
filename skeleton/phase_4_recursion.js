const range = function (start, end) {
    // return [start] if end == start
    // let arr = range(start,end-1);
    // arr << end
    // return arr
    // return start if end == start
    // ans=[]
    // ans << range(start,end-1)
    // return ans
    if(end === start){ 
        return [start];
    }
    let ans = range(start, end-1);
    ans.push(end);
    return ans;

};
// console.log(range(2,10));
const sumRec = function(arr){
    if(arr.length === 1){
        return arr[0];
    }
    return arr.pop() + sumRec(arr);
};
// let arr5 = range(1,3);
// console.log(sumRec(arr5));

const exponent = function(base, exp){
    if(exp === 0){
        return 1;
    }
    else if(exp === 1){
        return base;
    }
    return exponent(base, exp-1) * base;

};

const exponent2 = function (base, exp) {
    if (exp === 0) {
        return 1;
    }
    else if (exp === 1) {
        return base;
    }
    if(exp%2 === 0 ){
        return Math.pow(exponent(base, (exp / 2)), 2);
    }
    else{
        return base * Math.pow(exponent(base, ( (exp-1) / 2)), 2);
    }
};
// console.log(exponent2(5, 1));
const fibonacci = function (n){
    if(n === 1){
        return [1];
    }
    else if (n === 2) {
        return [1, 1];
    }
    let prev = fibonacci(n - 1);
    prev.push(prev[prev.length - 1] + prev[prev.length - 2]);
    return prev;
};
// console.log(fibonacci(4));

const deepDup = function(arr){
    let ans = [];
    for(let i = 0;i < arr.length; i++){
        if((arr[i] instanceof Array)){
            ans.push(deepDup(arr[i]) );
        }
        else{
            ans.push(arr[i]); 
        }
    }
    return ans;
    
    // ans = []
    // arr.each do |ele|
    //     if ele.is_a?(array)
    //         ans << recursion(ele)
    //     else
    //         ans << ele
    //     end
    // return ans

};
// let arr5 = [range(1, 3), 4, 5, range(10, 15)];
// let temp = deepDup(arr5);

// temp[0].push("hello!");
// console.log(deepDup(arr5));
const bsearch = function(arr, target){
    let mid = Math.floor(arr.length/2);
    if( target === arr[mid] ){
        return mid;
    }
    if(arr.length === 0){
        return -1;
    }
    let left = arr.slice(0, mid);
    let right = arr.slice(mid+1, arr.length);
    if(target < arr[mid]){
        // debugger
        return bsearch(left, target);
    }
    else{
        let temp = bsearch(right, target);
        if(temp >= 0){
            return temp + mid + 1;
        }
        else{
            return temp;
        }
    }
};
// console.log(bsearch(range(0, 99), 100));
