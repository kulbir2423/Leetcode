let nums2 = [5, 6, 2, 7, 4];
var maxProductDifference = function (nums) {
    let length = nums.length;
    nums2.sort((a,b)=> a-b);
    let diff =
      nums2[length - 1] * nums2[length - 2] -
      nums2[0] * nums2[1];
    return diff;
};
    
maxProductDifference(nums2);