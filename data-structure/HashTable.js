function HashTable() {
    const simpleHash=(data)=>{
    	let total=0;
    	const H=37;
    	for (let i=0;i<data.length;i++){
    		total+=H*data.charCodeAt(i);
		}
    	return total % this.table.length;
	};
    // 将数据映射到数组中的索引
	const put=(data)=>{
		let pos=this.simpleHash(data);
		this.table[pos]=data;
	};
	// 插入一个元素
	const showDistro=()=>{
		let keys=Object.keys(this.table);
		let str="";
		for (let i in keys){
			str+=keys[i]+": "+this.table[keys[i]]+"\n";
		}
		return str
	};
	// 打印所有数据
	const get=(data)=>{
		let str="";
		str=this.simpleHash(data)+": "+this.table[this.simpleHash(data)];
		return str
	};
	// 返回给定数据的键值对

	this.table=new Array(137);
	this.simpleHash=simpleHash;
	this.showDistro=showDistro;
	this.put=put;
	this.get=get;
}

let h=new HashTable();
h.put('David');
h.put('Jennifer');
h.put('Mike');
console.log(h.showDistro());
console.log(h.get('David'));