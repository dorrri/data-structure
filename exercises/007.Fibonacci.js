
// 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。

// n<=39

/**
 * @return {number}
 */
function Fibonacci(n)
{
	// write code here
	if(n<0 || n>39){
		return 0;
	}
	if(n===0){
		return 0;
	}
	if(n===1){
		return 1;
	}
	let fib=[0,1];
	for(let i=2;i<=n;i++){
		fib[i]=fib[i-1]+fib[i-2];
	}
	return fib[n];
}