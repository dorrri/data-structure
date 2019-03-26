function Stack() {
    const push=(item)=>{
    	this.dataStore[this.top]=item;
    	this.top++;
	};
    // 向栈顶压入一个元素
	const pop=()=>{
		this.top--;
		let poppedItem=this.dataStore[this.top];
		this.dataStore.splice(this.top,1);
		return poppedItem;
	};
	// 从栈顶弹出一个元素
	const peek=()=>this.dataStore[this.top-1];
	// 返回栈顶的元素
	const clear=()=>{
		this.top=0;
		delete this.dataStore;
		this.dataStore=[]
	};
	// 清空栈
	const length=()=>this.top;
	// 返回栈中的元素个数

	this.dataStore=[];
	this.top=0;
	this.push=push;
	this.pop=pop;
	this.peek=peek;
	this.clear=clear;
	this.length=length;
}

function mulBase(num,base){
    let s=new Stack();
    do {
		s.push(num % base);
		num=Math.floor(num/=base);
	}while (num>0);
    let result="";
    while (s.length()>0){
    	result+=s.pop();
	}
	return result;
}
// 转换数字进制


const isPlindrome=(word)=>{
	let s=new Stack();
	for (let i=0;i<word.length;i++){
		s.push(word[i]);
	}
	let convertedWord="";
	while (s.length()>0){
		convertedWord+=s.pop();
	}
	return (word === convertedWord);
};
// 判断字符串是否回文


let s=new Stack();
s.push('David');
s.push('Raymond');
s.push('Bryan');
let poppedItem=s.pop();
// s.clear();
let newNum=mulBase(64,8);
let isPlin=isPlindrome('你我你');
console.log(isPlin);