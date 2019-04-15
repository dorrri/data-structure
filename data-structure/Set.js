function Set1() {
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
		let unionSet=new Set();
		for (let i=0;i<this.size();i++) {
			unionSet.add(this.dataStore[i]);
		}
		for (let i=0;i<set.size();i++){
			if (!this.dataStore.includes(set.dataStore[i])){
				unionSet.add(set.dataStore[i]);
			}
		}
		return unionSet
	};
	// 求两个集合的并集
	const size=()=>this.dataStore.length;
	// 返回集合的长度
	const intersect=(set)=>{
        let interSet=new Set();
        for (let i=0;i<set.size();i++){
        	if (this.dataStore.includes(set.dataStore[i])){
        		interSet.add(set.dataStore[i]);
			}
		}
        return interSet
	};
	// 求两个集合的交集
	const subset=(set)=>{
		if (this.size()>set.size()){
			return false
		} else {
			for (let i=0;i<this.size();i++){
				if (!set.dataStore.includes(this.dataStore[i])){
					return false
				}
			}
			return true
		}
	};
	// 判断该集合是否是另一个集合的子集
	const difference=(set)=>{
	    let diffSet=new Set();
	    for (let i=0;i<this.size();i++){
	    	if (!set.dataStore.includes(this.dataStore[i])){
	    		diffSet.add(this.dataStore[i]);
			}
		}
	    return diffSet
	};
	// 求被传入的集合对于原集合的补集

	this.dataStore=[];
	this.add=add;
	this.remove=remove;
	this.size=size;
	this.union=union;
	this.intersect=intersect;
	this.subset=subset;
	this.difference=difference;
	this.show=show;
}

let s=new Set1();
s.add('David');
s.add('Jennifer');
s.add('Mike');
s.add('Raymond');
console.log(s.add('Mike'));
console.log(s.show());
console.log(s.remove('Mike'));
console.log(s.show());
let ss=new Set1();
ss.add('Raymond');
ss.add('Cynthia');
ss.add('Jonathan');
console.log(s.union(ss).show());
console.log(s.intersect(ss).show());
console.log(s.intersect(ss).subset(ss));
console.log(s.difference(s.intersect(ss)).show());
