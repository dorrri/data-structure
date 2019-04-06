
// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
// 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
// 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。

/**
 * @return {number}
 */
function MoreThanHalfNum_Solution(numbers)
{
	// write code here
	if(!numbers || numbers.length===0){
		return 0;
	}
	let count=new Set(),
		max=numbers[0],
		len=numbers.length;
	for(let i=0;i<len;i++){
		if(!count.hasOwnProperty(numbers[i])){
			count[numbers[i]]=1;
		} else {
			count[numbers[i]]++;
		}
		if(count[numbers[i]]>count[max]){
			max=numbers[i];
		}
	}
	return (count[max]>(len/2))?max:0;
}