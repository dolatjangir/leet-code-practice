function binarygap(n){
    const binary = n.toString(2);
    let maxGap = 0;
    let currentGap = -1;

    for(let bit of binary){
        if(bit === '1'){
            if(currentGap !== -1){
                maxGap = Math.max(maxGap, currentGap);
            }
            currentGap = 0; // Reset gap after finding a '1'
        } else if(currentGap !== -1){
            currentGap++; // Increment gap if we are in a gap
        }
    }
    return maxGap;
}

console.log(binarygap(22)); // Output: 2
console.log(binarygap(529));  