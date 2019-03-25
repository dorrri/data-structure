
// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

/**
 * @return {string}
 */
function VerifySquenceOfBST(sequence)
{
	// write code here
	return (isResult(sequence)) ? "Yes" : "No";
}

function isResult(list){
	if(list==null){
		return false;
	}
	if(list.length===0 || list.length===1 || list.length===2){
		return true;
	}
	let i=0,
		j=0,
		len=list.length,
		left=[],
		right=[],
		root=list[len-1];
	while(list[i]<root){
		left.push(list[i]);
		i++;
	}
	for(j=i;j<len-1;j++){
		if(list[j]<root){
			return false;
		}
		right.push(list[j]);
	}
	return isResult(left)&&isResult(right);
}

console.log(VerifySquenceOfBST([7,4,6,5]));
