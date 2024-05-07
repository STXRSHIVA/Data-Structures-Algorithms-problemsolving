/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    n = nums.length
    for(let i = 0;i<= n-2;i++){
        for(j=i+1;j<n;j++){
            if(nums[i] + nums[j] == target){
                return [i,j];
            }
        }
    }
};