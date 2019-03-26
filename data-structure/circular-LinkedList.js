function Node(ele) {
	this.element=ele;
	this.next=null;
}

function CircularLinkedList() {
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
		currentNode.next=newNode;
		this.pos=newNode;
	};
	// 在链表中插入一个节点
	const display=()=>{
		let str="", currentNode=this.head;
		while (currentNode.next!==this.head){
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
		if (this.pos===currNode){
			this.pos=preNode;
		}
		if (preNode.next !== null) {
			preNode.next = currNode.next;
			currNode = null;
		}

	};
	// 删除一个节点
    const back=(n)=>{
        for (let i=1;i<=n;i++){
        	this.pos=this.pos.next;
        	if (this.pos===this.head){
        		i--;
			}
		}
	};
    // 向后移动n个节点
    const show=()=>this.pos.element;
    // 返回当前节点

	this.head=new Node("head");
	this.head.next=this.head;
	this.find=find;
	this.insert=insert;
	this.remove=remove;
	this.display=display;
	this.findPre=findPre;
	this.back=back;
	this.show=show;
	this.pos=this.head;
}

let cities=new CircularLinkedList();
cities.insert('Conway','head');
cities.insert('Russellville','Conway');
cities.insert('Carlisle','Russellville');
cities.insert('Alma','Carlisle');
console.log(cities.display());
cities.insert('Roma','Conway');
console.log(cities.display());
cities.remove('Carlisle');
console.log(cities.display());
console.log(cities.show());
cities.back(9);
console.log(cities.show());
