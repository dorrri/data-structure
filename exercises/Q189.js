/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	var length=nums.length;
	var tem=nums.splice(length-3,3);
	console.log(tem);
	nums.splice(0, 0, ...tem);
	console.log(nums);
};

rotate([1,2,3,4,5,6,7],3);