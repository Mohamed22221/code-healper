
## 1. Two Sum

### Description

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

[enter link description here](https://leetcode.com/problems/two-sum/description/)

#### Solve Code

```javascript
var twoSum = function (nums, target) {
  return nums
    .map((_, index) => {
      if (nums[index] + nums[index + 1] === target) {
        return [nums.indexOf(nums[index]), nums.lastIndexOf(nums[index + 1])];
      }
    })
    .filter((item) => item)[0];
};
console.log(twoSum([2, 7, 11, 15], 9));

```

#### Output 
 **[0,1]** 