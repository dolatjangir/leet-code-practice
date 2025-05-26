/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroElement =  0;

    for(i = 0; i<nums.length;i++){
        if(nums[i] !== 0){
            nums[nonZeroElement++] = nums[i];
           
        };
    };

    for(i=nonZeroElement;i<nums.length;i++){
        
            nums[i] = 0;
    };
    return nums;
};

console.log(moveZeroes([0,1,0,2,4]));