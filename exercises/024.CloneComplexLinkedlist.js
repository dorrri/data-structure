
// 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，
// 另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。
// （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）

//此题不能用直接引用赋值，那样生成的新链表中的节点指向的都是原链表中的节点


/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
/**
 * @return {null}
 */
function Clone(pHead)
{
	// write code here
	if(!pHead) {
		return null;
	}
	let pCurrNode=pHead;
	while(pCurrNode!==null){
		let tempNode=new RandomListNode(pCurrNode.label);
		tempNode.next=pCurrNode.next;
		pCurrNode.next=tempNode;
		pCurrNode=tempNode.next;
	}
	//遍历链表，将生成的新节点插在对应节点后
	pCurrNode=pHead;
	while(pCurrNode!==null){
		let tempNode=pCurrNode.next;
		if(pCurrNode.random){
			tempNode.random=pCurrNode.random.next;
		}
		pCurrNode=tempNode.next;
	}
	//再次遍历链表，为每个新节点的random赋值
	pCurrNode=pHead;
	let head=pCurrNode.next,
		pSecNode=head.next,
		currNode;
	pCurrNode.next=pSecNode;
	if(pSecNode){
		head.next=pSecNode.next;
	}
	pCurrNode=pSecNode;
	currNode=head.next;
	while(pCurrNode!==null){
		pSecNode=currNode.next;
		pCurrNode.next=pSecNode;
		if(pSecNode){
			currNode.next=pSecNode.next;
		}
		pCurrNode=pCurrNode.next;
		currNode=currNode.next;
	}
	//分离原链表与新链表
	return head;
}
