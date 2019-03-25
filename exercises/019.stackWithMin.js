
// 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。

let stack=[],
	minStack=[];
function push(node)
{
	// write code here
	stack.push(node);
	if(minStack.length!==0){
		if(node<minStack[0]){
			minStack.unshift(node);
		} else {
			minStack.push(node);
		}
	} else {
		minStack.push(node);
	}

}
function pop()
{
	// write code here
	let delNode=stack.pop();
	minStack.splice(minStack.indexOf(delNode),1);
	return delNode;
}
function top()
{
	// write code here
	return (stack.length!==0)?stack[0]:null;
}
function min()
{
	// write code here
	return (minStack.length!==0)?minStack[0]:null;
}