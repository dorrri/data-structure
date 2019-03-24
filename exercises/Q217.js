/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	if(nums.length===0){
		return false;
	}

	return new Set(nums).size!==nums.length;

};

console.log(containsDuplicate([0]));