

// 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
// 并返回它的位置, 如果没有则返回 -1（需要区分大小写）.

/**
 * @return {number}
 */
function FirstNotRepeatingChar(str)
{
	// write code here
	if(!str){
		return -1;
	}
	let len=str.length,
		marked=[];
	for(let i=0;i<len;i++){
		if(str.indexOf(str[i],i+1)>-1 && marked.indexOf(str[i])===-1){
			marked.push(str[i]);
		}
		if(str.indexOf(str[i],i+1)===-1 && marked.indexOf(str[i])===-1){
			return i;
		}
	}
	return -1;
}