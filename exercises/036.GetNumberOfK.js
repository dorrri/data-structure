
// 统计一个数字在排序数组中出现的次数

/**
 * @return {number}
 */
function GetNumberOfK(data, k)
{
	// write code here
	if(!data){
		return 0;
	}
	if(data.indexOf(k)===-1){
		return 0;
	}
	let first=data.indexOf(k),
		last=data.lastIndexOf(k);
	return last-first+1;
}