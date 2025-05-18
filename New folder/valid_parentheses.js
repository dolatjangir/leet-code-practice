/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let smallS = "(";
    let smallC = ")";
    let curlyS = "{";
    let curlyC = "}";
     let squreS = "[";
    let squreC = "]"; 
    const arr = [];
    const m = s.length % 2
    if(m === 1){
        return false;
    };
    for(i=0;i<s.length;i++){
        if((smallS === s[i])||(curlyS === s[i])||(squreS===s[i])){
            arr.push(s[i]);
            continue;
        };
        const item = arr.pop();
        if((item === smallS && s[i]=== smallC)||(item===curlyS && s[i]===curlyC)||(item===squreS && s[i]===squreC)){
            continue
        } 
            return false
        
    }

    return arr.length == 0 
};

console.log(isValid("([)]"), "outer")
