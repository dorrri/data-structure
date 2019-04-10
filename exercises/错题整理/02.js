
//如果一个数字可以整除他所包含的所有数，则说他是开心的，返回H
//如果只能整除他所包含的部分数，则说它是平静的，返回C
//如果他不能整除他所包含的数，则它是沮丧的，返回S

function numberMood(num) {
	if (num==null){
		return null;
	} 
	let result=[];
	let eles=new Set((num+'').split(''));
	eles.forEach((ele)=>{
		if (num%(ele*1)===0){
			result.push(ele);
		}
	});
	if (result.length===eles.size){
		return 'H';
	} else if (result.length<eles.size && result.length!==0){
		return 'C';
	} else {
		return 'S';
	}

}
