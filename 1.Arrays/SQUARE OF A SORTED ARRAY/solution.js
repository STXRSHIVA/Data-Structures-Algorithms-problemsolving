let nums = [-4,-1,0,3,10]
var sortedSquares = function(nums){
    let result = [];
    for(let i = 0; i < nums.length; i++){
        result.push(nums[i]**2);
    }
    result.sort((a,b) => a-b);
    return result;
}

console.log(sortedSquares(nums));

// or

var sortedSquares1 = function(nums){
    for(let i = 0; i < nums.length; i++){
        nums[i]=nums[i]**2;
    }
    nums.sort((a,b) => a-b);
    return nums;
}

console.log(sortedSquares1(nums));

//or

let nums1 = [-4,-1,0,3,10]

var sortedSquares2 = function(nums1){
    let n = nums1.length;
    let result = Array(n);
    let left = 0;
    let right = n-1;
    for(let i = n-1 ; i>=0 ; i--){
        if(nums1[left]**2<nums1[right]**2){
            result[i] = nums1[right]**2;
            right--;
        }else{
            result[i] = nums1[left]**2;
            left++;
        }
    }
    return result;
}
console.log(sortedSquares2(nums1));


