/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    let start = x;
    let reverse = 0;
    while(x>0){
     reverse = reverse * 10 + (x % 10);
         x = Math.floor(x/10);
 
    };
    return reverse === start
 };