

// 一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。

function FindNumsAppearOnce(array)
{
	// write code here
	// return list, 比如[a,b]，其中ab是出现一次的两个数字
	if(!array || array.length<2){
		return [];
	}
	let result=[0,0],
		XORResult=0;
	for(let i=0;i<array.length;i++){
		XORResult^=array[i];
	}
	let first1=findFirst1(XORResult);
	for(let i=0;i<array.length;i++){
		if(bitIs1(array[i],first1)){
			result[0]^=array[i];
		}else{
			result[1]^=array[i];
		}
	}
	return result;
}
function findFirst1(num){
	let index=0;
	while((num & 1)===0 && (index<32)){
		num>>=1;
		index++;
	}
	return index;
}

function bitIs1(num,index){
	return !!((num >> index) & 1 === 1);
}