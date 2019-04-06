
// 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。


function GetLeastNumbers_Solution(input, k)
{
	// write code here
	if(!input||input.length<k || k===0){
		return [];
	}
	let len=input.length,
		min;
	for(let i=0;i<k;i++){
		min=i;
		for(let j=i;j<len;j++){
			if(input[j]<input[min]){
				min=j;
			}
		}
		[input[i],input[min]]=[input[min],input[i]];
	}
	return input.slice(0,k);
}