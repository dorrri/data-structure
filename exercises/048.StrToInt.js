
// 将一个字符串转换成一个整数(实现Integer.valueOf(string)的功能，
// 但是string不符合数字要求时返回0)，要求不能使用字符串转换整数的库函数。
// 数值为0或者字符串不是一个合法的数值则返回0。


/**
 * @return {number}
 */
function StrToInt(str)
{
	// write code here
	if(!str){
		return 0;
	}
	let len=str.length,
		result=0,
		i,flag;
	if(str[0]==="+"){
		i=1;
		flag=1
	}else if(str[0]==="-"){
		i=1;
		flag=-1;
	}else if(str[0]>"9" || str[0]<"0"){
		return 0;
	}else{
		i=0;
		flag=1;
	}
	for(i;i<len;i++){
		if(str[i]>"9"|| str[i]<"0"){
			return 0;
		}else{
			result=result*10+str[i]*1;
		}
	}
	return result*flag;
}

console.log(StrToInt('1a33'));