
// 输入一个字符串,按字典序打印出该字符串中字符的所有排列。
// 例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。

// 输入描述：
// 输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。


/**
 * 递归法
 * @return {string}
 */
function Permutation(str)
{
	// write code here
	if(!str){
		return str;
	}
	let len=str.length,
		result=[];
	str=str.split('');
	str.sort();

	Permutate(str,0);
	result=[...new Set(result)];
	return result.toString();

	function Permutate(str,index) {
        if(index===str.length){
        	let s='';
        	for(let i=0;i<str.length;i++){
        		s+=str[i];
			}
        	result.push(s);
		} else {
        	for(let i=index;i<str.length;i++){
        		[str[index],str[i]]=[str[i],str[index]];
        		Permutate(str,index+1);
			}
		}
	}
}

/**
 * 回溯法
 * @return {string}
 */
function Permutation2(str){
	// write code here
	if(!str){
		return str;
	}
	let len=str.length,
		result=[],
	    s='';
	str=str.split('');
	str.sort();

	Permutate(str);
	result=[...new Set(result)];
	return result.toString();

	function Permutate(str) {
		if(str.length===0){
			result.push(s);
		}else{
			let marked=new Set();
			for (let i=0;i<str.length;i++){
				if (!marked.has([str[i]])){
					let char=str.splice(i,1);
					s+=char;
					Permutate(str);
					str.splice(i,0,char);
					s=s.slice(0,s.length-1);
					marked.add(char);
				}
			}
		}
	}
}

console.log(Permutation2('abcd'));