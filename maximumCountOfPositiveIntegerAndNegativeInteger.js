var nums1 = [-2, -1, -1, 1, 2, 3];
// here are 3 positive integers and 3 negative integers. The maximum count among them is 3.
var maximumCount = function (nums1) {
  let countPos = 0;
  let countNeg = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] > 0) {
      countPos++;
      i++;
    } else if (nums[i] < 0) {
      countNeg++;
      i++;
    } else i++;
  }
  console.log(Math.max(countPos, countNeg));
  return Math.max(countPos, countNeg);
  
};
maximumCount(nums1);
