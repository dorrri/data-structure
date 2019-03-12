function Queue(){
    const enqueue=(item)=>{
        this.dataStore.push(item);
	};
    // 向队尾添加一个元素
	const length=()=>this.dataStore.length;
	// 返回队列的长度
	const dequeue=()=>this.dataStore.shift();
	// 删除队首的元素，并返回该元素
	const front=()=>this.dataStore[0];
	// 读取队首的元素
	const back=()=>this.dataStore[this.length()-1];
	// 读取队尾的元素
	const toString=()=>{
	    let newStr="";
	    for (let i=0;i<this.length();i++){
	    	newStr+=this.dataStore[i]+"\n";
		}
	    return newStr
	};
	// 打印队列
	const clear=()=>{
		delete this.dataStore;
		this.dataStore=[];
	};
	// 清空队列


	this.dataStore=[];
	this.enqueue=enqueue;
	this.dequeue=dequeue;
	this.front=front;
	this.back=back;
	this.toString=toString;
	this.clear=clear;
	this.length=length;
}

let q=new Queue();
q.enqueue('Meredith');
q.enqueue('Cynthia');
q.enqueue('Jennifer');
console.log(q.toString());
console.log(q.dequeue());
console.log(q.front());
console.log(q.back());
q.clear();
console.log(q.front());