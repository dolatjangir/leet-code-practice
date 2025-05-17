/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let smallS = 0;
    let smallC = 0;
    let midS = 0;
    let midC = 0;
    let curlyS = 0;
    let curlyC = 0;
    for (i=0;i<s.length;i++){
        if (s[i] == "(") {
        smallS++
};
if (s[i] == ")") {
	smallC++
	};
    	if (s[i] == "{") {
midS++
}


if (s[i] == "}") {
	midC++
	};
    	if (s[i] == "[") {
curlyS++
}


if (s[i] == "]") {
	curlyC++
	};
    if ((smallC > smallS) || (midC > midS) || (curlyC > curlyS) ) {
		return false 
	}
	continue


if ((smallC == smallS) && (midC == midS) && (curlyC == curlyS)) {
	return true
}

return false

    }

};    azdyFUJGKI