var addBinary = function(a, b) {
    let c = a + b ;
    let binary = "";
    if(c == 0 ){
        return 0;
    }
    while(c > 0){
        binary = (c % 2) + binary;
        console.log(binary);
        c = Math.floor(c/2);
    };
    return binary;
};

console.log(addBinary(11,1))