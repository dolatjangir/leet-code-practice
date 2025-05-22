/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let trimmedValue = s.trim();
    let length = 0;
for(i = trimmedValue.length - 1 ; i >= 0 ; i--){
    if(trimmedValue[i] !== ' '){
        length++;
        // console.log(length);
    }else{
        break;
    }
}
return length;
   
};
console.log(lengthOfLastWord("Hello World"));