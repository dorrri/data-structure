

// 求集合的所有子集

function subSet(s) {
	if(!s){
		return new Set();
	}
	let result=new Set();
	result.add(new Set());
	for (let v of s){
		let subSet=new Set([v]),
		    tmpSet=new Set();
		for (let res of result){
			tmpSet.add(new Set(Array.from(res).concat(Array.from(subSet))));
		}
		for (let tmp of tmpSet){
			result.add(tmp);
		}
	}
	return result;
}

console.log(...subSet(new Set([1,2,3])));