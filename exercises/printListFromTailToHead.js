function printListFromTailToHead(head)
{
	// write code here
	let ArrayList=[];
	const createArrayList=(node)=>{
		if(node!==null){
			createArrayList(node.next);
			ArrayList.push(node.val);
		}
	};
	createArrayList(head);
	return ArrayList
}

function ListNode(x) {
	this.val = x;
	this.next = null;
}

let head=new ListNode(1);
let newNode=new ListNode(2);
let newNode2=new ListNode(3);
head.next=newNode;
newNode.next=newNode2;
console.log(printListFromTailToHead(head));