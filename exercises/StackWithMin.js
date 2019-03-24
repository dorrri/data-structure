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