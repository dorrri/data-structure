
// 输入一个链表，输出该链表中倒数第k个结点。

function ListNode(x){
    this.val = x;
    this.next = null;
}
function FindKthToTail(head, k)
{
	// write code here
	let nodeList=[],
		currNode=head;
	while(currNode!==null){
		nodeList.push(currNode);
		currNode=currNode.next;
	}
	if(nodeList.length>=k){
		return nodeList[nodeList.length-k];
	} else {
		return null;
	}

}