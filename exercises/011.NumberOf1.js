

// 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

/**
 * @return {number}
 */
function NumberOf1(n)
{
	// write code here
	let isNegative=false,
		count=0;
	if(n<0){
		n=-1*n-1;
		isNegative=true;
	}
	while(n!==0) {
		if(n%2===1){
			count++;
		}
		n=Math.floor(n/2);
	}
	if(isNegative){
		count=32-count;
	}
	return count;
}