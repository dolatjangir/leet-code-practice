/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const dlen = digits.length
    for(i=dlen-1;i>=0;i--){
        if(digits[i]<9){
            digits[i]++;
            return digits
        }
        digits[i]=0;
    }
    return [1,...digits];
};