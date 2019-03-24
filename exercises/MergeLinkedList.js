function ListNode(x){
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2)
{
	// write code here
	let currNode1=pHead1,
		currNode2=pHead2,
		preNode=null,
		head=null;

	if(currNode1!=null && currNode2!=null){
		if(currNode1.val<currNode2.val){
			preNode=currNode1;
			currNode1=currNode1.next;
		} else {
			preNode=currNode2;
			currNode2=currNode2.next;
		}
		head=preNode;

		while(currNode1!==null && currNode2!==null){
			if(currNode1.val<currNode2.val){
				preNode.next=currNode1;
				currNode1=currNode1.next;
			} else {
				preNode.next=currNode2;
				currNode2=currNode2.next;
			}
			preNode=preNode.next;
		}
	}
	while(currNode1){
		if(preNode){
			preNode.next=currNode1;
			preNode=preNode.next;
		} else {
			preNode=currNode1;
			head=currNode1;
		}
		currNode1=currNode1.next;
	}
	while(currNode2){
		if(preNode){
			preNode.next=currNode2;
			preNode=preNode.next;
		} else {
			preNode=currNode2;
			head=currNode2;
		}
		currNode2=currNode2.next;
	}

	return head;
}

let node1=new ListNode(1);
let node2=new ListNode(2);
console.log(Merge(node1));
console.log(Boolean({}));
