function Set() {
	const add=(data)=>{
		if (this.dataStore.indexOf(data)<0){
			this.dataStore.push(data);
			return true;
		} else {
			return false;
		}
	};
	// 添加一个元素
	const remove=(data)=>{
		const pos=this.dataStore.indexOf(data);
		if (pos>-1){
			return this.dataStore.splice(pos,1);
		} else {
			return false
		}
	};
	// 删除一个元素
	const show=()=>this.dataStore;
	// 返回所有元素
	const union=(set)=>{
		let iterSet=(this.size()<set.size())?this:set;
		let unionSet=(this.size()>=set.size())?this:set;
		for (let i=0;i<iterSet.size();i++){
			if (!unionSet.dataStore.includes(iterSet.dataStore[i])){
				unionSet.add(iterSet.dataStore[i]);
			}
		}
		return unionSet
	};
	// 求两个集合的并集
	const size=()=>this.dataStore.length;
	// 返回集合的长度

	this.dataStore=[];
	this.add=add;
	this.remove=remove;
	this.size=size;
	this.union=union;
	// this.intersect=intersect;
	// this.subset=subset;
	// this.difference=difference;
	this.show=show;
}

let s=new Set();
s.add('David');
s.add('Jennifer');
s.add('Mike');
s.add('Raymond');
console.log(s.add('Mike'));
console.log(s.show());
console.log(s.remove('Mike'));
console.log(s.show());
let ss=new Set();
ss.add('Raymond');
ss.add('Cynthia');
ss.add('Jonathan');
console.log(s.union(ss).show());
