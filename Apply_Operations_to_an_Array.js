const applyOp = function(nums){
    
for(i = 0; i < nums.length-1;i++){
    if(nums[i]===nums[i+1]){
        nums[i] = nums[i]*2;
        nums[i+1] = nums[i+1]*0;
        console.log(nums[i],nums[i+1])
    }
}
let k =0;
for(j=0;j<nums.length;j++){
    if(nums[j]!==0){
        nums[k++] = nums[j];
    }
}
for(l=k;l<nums.length;l++){
    
        nums[l]=0;
    
}

return nums;
}




console.log(applyOp([1,2,2,1,1,0]));