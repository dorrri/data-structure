
// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

let inStack=[],
	outStack=[];
function push(node)
{
	// write code here
	inStack.push(node);
}
function pop()
{
	// write code here
	if(outStack.length===0){
		while(inStack.length!==0){
			outStack.push(inStack.pop());
		}
	}
	return outStack.pop();
}