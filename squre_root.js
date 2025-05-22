var sqrt = function (x){
let low = 1;
let high = x;
let result = 0;
if(x === 0){
    return 0;
};
while(low<=high){
    let mid = Math.floor((low + high)/2);
    if(mid * mid === x){
        return mid;
    }
    else if(mid * mid < x){
        low = mid + 1;
        result = mid;
    }else{
        high = mid  - 1;
    }
}
return result;
}

console.log(sqrt(2))