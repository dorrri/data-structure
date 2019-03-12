function Node(ele) {
	this.element=ele;
	this.next=null;
}

function LinkedList() {
	const find=(item)=>{
		let currNode=this.head;
		while(currNode.element!==item){
			currNode=currNode.next;
		}
		return currNode
	};
	// 找到并返回链表中的特定节点
	const insert=(newEle,item)=>{
		let newNode=new Node(newEle);
		let currentNode=this.find(item);
		newNode.next=currentNode.next;
		currentNode.next=newNode;
	};
	// 在链表中插入一个节点
	const display=()=>{
		let str="", currentNode=this.head;
		while (currentNode.next!==null){
			str+=currentNode.next.element+", ";
			currentNode=currentNode.next;
		}
		return str
	};
	// 打印链表
	const findPre=(item)=>{
		let currentNode=this.head;
		while (currentNode.next.element!==item && currentNode.next!==null){
			currentNode=currentNode.next;
		}
		return currentNode
	};
	// 找到传入节点的前一个节点
	const remove=(item)=>{
	    let preNode=this.findPre(item);
	    let currNode=this.find(item);
	    if (preNode.next!==null){
	    	preNode.next=currNode.next;
	    	currNode=null;
		}
	};

	this.head=new Node("head");
	this.find=find;
	this.insert=insert;
	this.remove=remove;
	this.display=display;
	this.findPre=findPre;
}

let cities=new LinkedList();
cities.insert('Conway','head');
cities.insert('Russellville','Conway');
cities.insert('Carlisle','Russellville');
cities.insert('Alma','Carlisle');
console.log(cities.display());
cities.insert('Roma','Conway');
console.log(cities.display());
cities.remove('Carlisle');
console.log(cities.display());
