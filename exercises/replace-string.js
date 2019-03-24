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
	return newStr
}

let str=replaceSpace("hello world");
console.log(str);