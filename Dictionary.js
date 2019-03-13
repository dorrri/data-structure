function Dictionary(){
	const add=(key,value)=>{
	    this.dataStore[key]=value;
	};
	// 添加一个键值对
	const find=(key)=>this.dataStore[key];
	// 找到某个键对应的值
	const remove=(key)=>{
		delete this.dataStore[key];
	};
	// 删除一个键值对
	const toString=()=>{
		let str="";
		let keys=Object.keys(this.dataStore);
		for (let i=0;i<keys.length;i++){
			str+=keys[i]+": "+this.dataStore[keys[i]]+", ";
		}
		return str
	};
	// 打印所有键值对
	const count=()=>Object.keys(this.dataStore).length;
	// 返回键值对的个数
	const clear=()=>{
	    let keys=Object.keys(this.dataStore);
	    for(let i in keys){
	    	delete this.dataStore[keys[i]];
		}
	};
	// 清空字典
	const sort=()=>{
		let keys=Object.keys(this.dataStore).sort();
		let str="";
		for (let i in keys){
			str+=keys[i]+": "+this.dataStore[keys[i]]+", ";
		}
		return str
	};
	// 对键值对排序

	this.dataStore=new Array();
	this.add=add;
	this.find=find;
	this.remove=remove;
	this.toString=toString;
	this.count=count;
	this.clear=clear;
	this.sort=sort;
}

let d=new Dictionary();
d.add("Mike","123");
d.add("David", "345");
d.add("Cynthia", "456");
console.log(d.toString());
console.log(d.count());
d.remove('David');
// d.clear();
console.log(d.toString());
console.log(d.sort());
