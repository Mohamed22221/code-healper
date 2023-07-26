// Link challenge : https://leetcode.com/problems/two-sum/description/
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

var twoSum = function (nums, target) {
  var hash = {};
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    if (nums[i] in hash) return [hash[nums[i]], i];
    hash[target - nums[i]] = i;
  }
  return [-1, -1];
};
console.log(twoSum([2, 7, 11, 15], 9));
