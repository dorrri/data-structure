function List() {
	const append=(item)=> {
		this.dataStore[this.listSize++]=item;
	};
	//在列表里添加一个元素
	const find=	(item)=> this.dataStore.indexOf(item);
	// 找到元素在列表中的位置并返回下标
	const remove=(item)=>{
		const itemIndex=this.find(item);
		if (itemIndex>-1){
			this.dataStore.splice(itemIndex,1);
			this.listSize--;
			return true;
		} else {
			return false;
		}
	};
	// 移去列表中的一个元素
	const length=()=>this.listSize;
	// 返回列表长度
	const toString=()=>this.dataStore;
	// 打印列表
	const insert=(item,insertIndex)=>{
		if (insertIndex>=0 && insertIndex<=this.listSize){
			this.dataStore.splice(insertIndex,0,item);
			this.listSize++;
			return true;
		} else {
			return false;
		}
	};
	// 在列表中插入一个元素，需要传入插入的位置
	const clear=()=>{
		delete this.dataStore;
		this.dataStore=[];
		this.listSize=0;
	};
	// 清空列表
	const front=()=>{
		this.index=0;
	};
	// 将迭代器移动到列表的第一个元素
	const end=()=>{
		this.index=this.listSize-1;
	};
	// 将迭代器移动到最后一个元素
	const prev=()=>{
		if (this.index>0){
			this.index--;
		}
	};
	// 将迭代器向前移动一个位置
	const next=()=>{
		if (this.index<this.listSize){
			this.index++;
		}
	};
	// 将迭代器向后移动一个位置
	const currPos=()=>this.index;
	// 返回当前位置
	const moveTo=(index)=>{
		if (index>=0 && index<this.listSize){
			this.index=index;
		}
	};
	// 将迭代器移动到指定位置
	const getElement=()=>this.dataStore[this.index];
	// 返回当前位置的元素

	this.listSize=0;
	this.index=0;
	this.dataStore=[];
	this.clear=clear;
	this.find=find;
	this.length=length;
	this.toString=toString;
	this.insert=insert;
	this.append=append;
	this.remove=remove;
	this.front=front;
	this.end=end;
	this.prev=prev;
	this.next=next;
	this.currPos=currPos;
	this.moveTo=moveTo;
	this.getElement=getElement;
}

let list=new List();
list.append('hello');
list.append('world');
list.append('my');
list.append('name');
list.append('is');
list.append('dori');
list.remove('world');
list.insert('barbie',4);
// list.clear();
list.front();
list.end();
for (list.front();list.currPos()<list.length();list.next()){
	console.log(list.getElement());
}



