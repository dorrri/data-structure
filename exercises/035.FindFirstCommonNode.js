
// 输入两个链表，找出它们的第一个公共结点。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
/**
 * @return {ListNode}
 */
function FindFirstCommonNode(pHead1, pHead2)
{
	// write code here
	if(!pHead1 || !pHead2){
		return null;
	}
	let len1=0,
		len2=0,
		curr1=pHead1,
		curr2=pHead2;
	while(curr1!==null){
		len1++;
		curr1=curr1.next;
	}
	while(curr2!==null){
		len2++;
		curr2=curr2.next;
	}
	let longer=(len1>=len2)?pHead1:pHead2,
		shorter=(len1<len2)?pHead1:pHead2;
	for(let i=1;i<=Math.abs(len1-len2);i++){
		longer=longer.next;
	}
	while(longer!==null && shorter!==null){
		if(longer===shorter){
			return longer;
		}
		longer=longer.next;
		shorter=shorter.next;
	}
	return null;
}