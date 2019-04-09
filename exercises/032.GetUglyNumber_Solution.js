

// 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
// 例如6、8都是丑数，但14不是，因为它包含质因子7。
// 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。

/**
 * @return {number}
 */
function GetUglyNumber_Solution(index)
{
	// write code here
	if(index<=0){
		return 0;
	}
	let uglyNum=[],
		i2=0,
		i3=i2,
		i5=i2;
	uglyNum[0]=1;
	for(let i=1;i<index;i++){
		uglyNum[i]=Math.min(uglyNum[i2]*2,uglyNum[i3]*3,uglyNum[i5]*5);
		i2=(uglyNum[i]===uglyNum[i2]*2)?i2+1:i2;
		i3=(uglyNum[i]===uglyNum[i3]*3)?i3+1:i3;
		i5=(uglyNum[i]===uglyNum[i5]*5)?i5+1:i5;
	}
	return uglyNum[index-1];
}