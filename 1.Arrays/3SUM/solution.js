let nums1 = [-1,0,1,2,-1,-4];

//     Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
//     such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

let nums = [-1, 0, 1, 2, -1, -4];

var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // Sort the array first
    let n = nums.length;
    let result = [];
    for (let c = 0; c < n - 2; c++) {
        if (c === 0 || nums[c] !== nums[c - 1]) {
            let i = c + 1;
            let j = n - 1;
            while (i < j) {
                let sum = nums[c] + nums[i] + nums[j];
                if (sum === 0) {
                    result.push([nums[c], nums[i], nums[j]]);
                    // Skip duplicates
                    while (i < j && nums[i] === nums[i + 1]) i++;
                    while (i < j && nums[j] === nums[j - 1]) j--;
                    i++;
                    j--;
                } else if (sum < 0) {
                    i++;
                } else {
                    j--;
                }
            }
        }
    }
    return result;
}

console.log(threeSum(nums));
