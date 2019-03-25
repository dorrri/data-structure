
/*请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。*/

/**
 * @param {string} str
 * @return {string} newStr
*/

function replaceSpace(str)
{
	// write code here
	let strs=str.split(" ");
	let newStr="";
	for (let i=0;i<strs.length;i++){
		if (i===strs.length-1){
			newStr+=strs[i];
		} else {
			newStr+=strs[i]+"%20";
		}
	}
	return newStr;
}