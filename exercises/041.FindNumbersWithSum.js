
// 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。

function FindNumbersWithSum(array, sum)
{
	// write code here
	if(!array || array.length===0){
		return [];
	}
	let result=[],
		min=0,
		left=0,
		right=array.length-1;
	while(left<right){
		let tmp=array[left]+array[right];
		if(tmp===sum){
			result.push(array[left],array[right]);
			break;
		}else if(tmp>sum){
			right--;
		}else {
			left++;
		}
	}
	return result;
}