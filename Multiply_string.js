function multiplyStrings(num1,num2){
    let m = num1.length;
    let n = num2.length;
    let result = new Array(m + n ).fill(0);
    for(let i = m-1 ; i>=0; i--){
        for(let j = n-1; j >= 0; j--){
            let multiply = (num1[i] - '0') * (num2[j]- '0');
            let  sum = multiply + result[i + j + 1];
            result[i + j + 1] = sum % 10; // Store the unit place
            result[i + j] += Math.floor(sum / 10); // Carry over to the next place

        }
    }
    // Convert result array to string, skipping leading zeros
    let resultStr = result.join('').replace(/^0+/, '');
    return resultStr.length ? resultStr : '0'; // Return '0' if result is empty
}

console.log(multiplyStrings("123", "456")); // Output: "56088"