// source: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/



// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.




var moveZeroes = function(nums) {
    let length = nums.length;
    
    for (i = 0; i < length; i) {    // override incrementor
        if (nums[i] == 0) {
            nums.splice(i, 1);
            nums.push(0);
            length--;                       // if 0 found, decrement length variable, and keep index the same
        } else {
            i++;                            // else, check next index
        };
    };
    
    return nums
};