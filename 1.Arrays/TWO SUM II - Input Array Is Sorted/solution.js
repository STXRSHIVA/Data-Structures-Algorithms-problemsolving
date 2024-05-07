/**
 * 
@param {number[]} numbers
@param {number} target
@return {number[]}
 
var twoSum = function(numbers, target) {
    n = numbers.length
    for(let i = 0;i<= n-2;i++){
        for(j=i+1;j<n;j++){
            if(numbers[i] + numbers[j] == target){
                return [i+1,j+1];
            }
        }
    }
};


 */

// The above code perfectly runs the for the answer but after submitting we get time limit exceeded
// The below code is the optimized code

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n = nums.length
    let i = 0
    let j = n - 1
    while(i<j){
        if(nums[i] + nums[j] == target){
            return [i+1,j+1];
        }else if(nums[i] + nums[j] > target){
            j--;
        }else{
            i++;
        }
    }
};