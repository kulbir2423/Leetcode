let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else left = mid + 1;
  }
  return -1;
};
search(nums,target);