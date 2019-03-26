function Node(ele) {
	this.element=ele;
	this.next=null;
	this.previous=null;
}

function DoublyLinkedList() {
	const find=(item)=>{
		let currNode=this.head;
		while(currNode.element!==item && currNode!==null){
			currNode=currNode.next;
		}
		return currNode
	};
	// 找到并返回链表中的特定节点
	const insert=(newEle,item)=>{
		let newNode=new Node(newEle);
		let currentNode=this.find(item);
		newNode.next=currentNode.next;
		newNode.previous=currentNode;
		currentNode.next=newNode;
		if (newNode.next!==null){
			newNode.next.previous=newNode;
		}
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
	const remove=(item)=>{
		let currNode=this.find(item);
		if (currNode){
			currNode.previous.next=currNode.next;
			currNode.next.previous=currNode.previous;
			currNode.next=null;
			currNode.previous=null;
		}
	};
	// 删除一个节点
    const findLast=()=>{
        let currNode=this.head;
        while (currNode.next!==null){
        	currNode=currNode.next;
		}
		return currNode;
	};
    // 找到最后一个节点
	const dispReverse=()=>{
	    let currNode=this.findLast();
	    let str="";
	    while (currNode.previous!==null){
	    	str+=currNode.element+", ";
	    	currNode=currNode.previous;
		}
		return str
	};

	this.head=new Node("head");
	this.find=find;
	this.insert=insert;
	this.remove=remove;
	this.display=display;
	this.findLast=findLast;
	this.dispReverse=dispReverse;
}

let cities=new DoublyLinkedList();
cities.insert('Conway','head');
cities.insert('Russellville','Conway');
cities.insert('Carlisle','Russellville');
cities.insert('Alma','Carlisle');
console.log(cities.display());
cities.insert('Roma','Conway');
console.log(cities.display());
// cities.remove('Carlisle');
console.log(cities.dispReverse());
console.log(cities.findLast());