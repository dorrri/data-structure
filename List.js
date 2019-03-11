function List() {
	const append=(item)=> {
		this.dataStore[this.listSize++]=item;
	};
	const find=	(item)=> this.dataStore.indexOf(item);

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
	const length=()=>this.listSize;
	const toString=()=>this.dataStore;
	const insert=(item,insertIndex)=>{
		if (insertIndex>=0 && insertIndex<=this.listSize){
			this.dataStore.splice(insertIndex,0,item);
			this.listSize++;
			return true;
		} else {
			return false;
		}
	};
	const clear=()=>{
		delete this.dataStore;
		this.dataStore=[];
		this.listSize=0;
	};
	const front=()=>{
		this.index=0;
	};
	const end=()=>{
		this.index=this.listSize-1;
	};
	const prev=()=>{
		if (this.index>0){
			this.index--;
		}
	};
	const next=()=>{
		if (this.index<this.listSize){
			this.index++;
		}
	};
	const currPos=()=>this.index;
	const moveTo=(index)=>{
		if (index>=0 && index<this.listSize){
			this.index=index;
		}
	};
	const getElement=()=>this.dataStore[this.index];

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



