
// 输入一个链表，反转链表后，输出新链表的表头。

function ListNode(x){
    this.val = x;
    this.next = null;
}
function ReverseList(pHead)
{
	// write code here
	let preNode=null,
		currNode=pHead,
		nextNode;
	while(currNode!==null){
		nextNode=currNode.next;
		currNode.next=preNode;
		preNode=currNode;
		currNode=nextNode;
	}
	return preNode;
}