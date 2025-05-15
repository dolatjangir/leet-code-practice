/**
 * @param {string} haystack
 * @param {string} needle 
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle === 0){
        return 0;
    };
    let nlen = needle.length;
    let hlen = haystack.length;
    for(i=0;i<=hlen-nlen;i++){
        if(haystack.substring(i,i+nlen)===needle){
            return i ;
        }
       
    };
     return -1

};