

// 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

function rectCover(number)
{
	// write code here
	if(number<=0 || number===1 || number===2){
		return number;
	}
	let result=[1,2];
	for(let i=2;i<number;i++){
		result[i]=result[i-1]+result[i-2];
	}
	return result[number-1];
}