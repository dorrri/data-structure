/**
 * @return {string}
 */
function LeftRotateString(str, n)
{
	// write code here
	if(!str){
		return "";
	}
	n=n%str.length;
	let s1=str.substr(0,n),
		s2=str.substr(n);
	return s2+s1;
}

console.log(Boolean(" "));