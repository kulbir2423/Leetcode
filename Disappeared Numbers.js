let nums7 = [4, 3, 2, 7, 8, 2, 3, 1];
let arr=[];
var findDisappearedNumbers = function (nums) {
    let length = nums.length;
    nums.sort();
    var set = new Set(nums);
    for(let i=1;i<=length;i++) {
        if(!set.has(i)) {
            arr.push(i);
        }
    }
    return arr;
};

findDisappearedNumbers(nums7);
