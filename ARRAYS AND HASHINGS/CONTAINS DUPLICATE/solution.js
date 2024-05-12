const nums = [1,2,3,4]

var containsDuplicate = function(nums) {
    let x = {}
    let n = nums.length
    for(let i = 0; i < n ; i++){
        for(let j = n-1;j<n;j--){
            if(nums[i] === nums[j]){
                return true; 
            }
        }

    }
    return false
};

containsDuplicate(nums);