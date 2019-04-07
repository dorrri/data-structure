
// HZ偶尔会拿些专业问题来忽悠那些非计算机专业的同学。
// 今天测试组开完会后,他又发话了:在古老的一维模式识别中,常常需要计算连续子向量的最大和,
// 当向量全为正数的时候,问题很好解决。
// 但是,如果向量中包含负数,是否应该包含某个负数,并期望旁边的正数会弥补它呢？
// 例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。
// 给一个数组，返回它的最大连续子序列的和，你会不会被他忽悠住？(子向量的长度至少是1)

/**
 * 我自己写的最笨的遍历方法
 * @return {number}
 */
function FindGreatestSumOfSubArray(array)
{
	// write code here
	if(!array || array.length===0){
		return 0;
	}
	let len=array.length,
		max=array[0];
	for(let k=1;k<=len;k++){
		for(let i=0;i<len-k+1;i++){
			let s=0;
			for(let j=0;j<k;j++){
				s+=array[i+j];
			}
			if(s>max){
				max=s;
			}
		}
	}
	return max;
}

/**
 * 如果前面子序列的和为负则抛弃前面的子序列，重新开始计算子序列之和
 * @return {number}
 */
function FindGreatestSumOfSubArray2(array)
{
	// write code here
	if(!array || array.length===0){
		return 0;
	}
	let len=array.length,
		s=array[0],
		max=s;
	for(let i=1;i<len;i++){
		s=(s<0)?array[i]:s+array[i];
		max=(s>max)?s:max;
	}
	return max;
}


/**
 * 动态规划思想（其实一开始想到了是可以用动态规划的，但是对动态规划的理解还是不到位，没有想出来到底怎么做）
 * @return {number}
 */
function FindGreatestSumOfSubArray3(array)
{
	// write code here
	if(!array || array.length===0){
		return 0;
	}
	let len=array.length,
		max=array[0],
		s=max;
	for(let i=1;i<len;i++){
		s=Math.max(s+array[i],array[i]);
		max=Math.max(s,max);
	}
	return max;
}
