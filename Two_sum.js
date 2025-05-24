var twoSum = function(nums, target) {
  for(i=0;i<=nums.length-1;i++){
    for(j=i+1;j<=nums.length-1;j++){
    let add = nums[i] + nums[j];
    if(target === add){
  return [i,j];
    }
    console.log(i,j)
  }  ;
  }  ;
  
};

console.log(twoSum([2,4,5,7,9],9))