function romantointeger(s) {
let romanvalues = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000,}

    let total = 0;
    for(let i = 0; i < s.length; i++){
        let currentval = romanvalues[s[i]];
        let nextval = romanvalues[s[i+1]];
        if(currentval < nextval){
            total += nextval - currentval;
            i++;
        }else{
            total += currentval;
        }
    }
    return total;

}

console.log(romantointeger("MCMXCIV"));