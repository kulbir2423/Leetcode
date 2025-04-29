let nums8 = [1,2,3];
let product = 0;
let length = nums8.length;
var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b);
  product = product + nums8[length]*nums8[length-1]*nums8[length-2];
};
maximumProduct(nums8);