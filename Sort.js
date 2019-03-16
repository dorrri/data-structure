function CArray(numElements) {
    const setData=()=>{
    	for (let i=0;i<this.numElements;i++){
    		this.dataStore[i]=Math.floor(Math.random()*(this.numElements+1));
		}
	};

    const clear=()=>{
		for (let i=0;i<this.numElements;i++){
			this.dataStore[i]=0;
		}
	};

    const insert=(element)=>{
    	this.dataStore[this.pos++]=element;
	};

    const toString=()=>{
    	let str="";
		for (let i=0;i<this.numElements;i++){
			str+=this.dataStore[i]+" ";
			if (i>0 && i%10===0) {
				str+='\n';
			}
		}
		return str
	};

    const swap=(index1,index2)=> {
    	let temp=this.dataStore[index1];
		this.dataStore[index1]=this.dataStore[index2];
		this.dataStore[index2]=temp;
	};

	const bubbleSort=()=>{
		for (let i=this.numElements;i>1;i--){
			for (let j=0;j<i-1;j++){
				if (this.dataStore[j]>this.dataStore[j+1]){
					this.swap(j,j+1);
				}
			}
		}
	};
	// 冒泡排序
	const selectionSort=()=>{
		let min;
		for (let i=0;i<this.numElements-1;i++){
			min=i;
			for (let j=i+1;j<this.numElements;j++){
				if (this.dataStore[i]>this.dataStore[j]){
					min=j;
				}
			}
			this.swap(i,min);
		}
	};
	// 选择排序
	const insertionSort=()=>{
		let temp;
		for (let i=1;i<this.numElements;i++){
			temp=this.dataStore[i];
			let j=i;
			while (j>0 && this.dataStore[j-1]>temp) {
				this.dataStore[j]=this.dataStore[j-1];
				j--;
			}
			this.dataStore[j]=temp;
		} 
	};
	// 插入排序
	const shellSort=()=>{
		for (let g=0;g<this.gaps.length;g++){
			for (let i=this.gaps[g];i<this.numElements;i++){
				let temp=this.dataStore[i];
				let j=i;
				while (j>=this.gaps[g] && this.dataStore[j-this.gaps[g]]>temp){
					this.dataStore[j]=this.dataStore[j-this.gaps[g]];
					j-=this.gaps[g];
				}
				this.dataStore[j]=temp;
			}
		}
	};
	// 希尔排序
	const mergeSort=()=>{
		if (this.numElements<2){
			return;
		}
		let step=1;
		let left,right;
		while (step<this.numElements){
			left=0;
			right=step;
			while (right+step<=this.numElements){
				mergeArrays(left,left+step,right,right+step);
				left=right+step;
				right=left+step;
			}
			if (right<this.numElements){
				mergeArrays(left,left+step,right,this.numElements);
			}
			step*=2;
		}
	};
	const mergeArrays=(startLeft,stopLeft,startRight,stopRight)=>{
		let rightArr=new Array(stopRight-startRight+1);
		let leftArr=new Array(stopLeft-startLeft+1);
		let k=startRight;
		for (let i=0;i<(rightArr.length-1);i++){
			rightArr[i]=this.dataStore[k];
			k++;
		}
		k=startLeft;
		for (let i=0;i<leftArr.length-1;i++){
			leftArr[i]=this.dataStore[k];
			k++;
		}
		rightArr[rightArr.length-1]=Infinity;
		leftArr[leftArr.length-1]=Infinity;
		let m=0;
		let n=0;
		for (let i=startLeft;i<stopRight;i++){
			if (leftArr[m]<=rightArr[n]){
				this.dataStore[i]=leftArr[m];
				m++;
			} else {
				this.dataStore[i]=rightArr[n];
				n++
			}
		}
	};
	// 归并排序

	this.dataStore=[];
	this.pos=0;
	this.numElements=numElements;
	this.insert=insert;
	this.toString=toString;
	this.clear=clear;
	this.setData=setData;
	this.swap=swap;
	for (let i=0;i<numElements;i++){
		this.dataStore[i]=i;
	}
	this.bubbleSort=bubbleSort;
	this.selectionSort=selectionSort;
	this.insertionSort=insertionSort;
	this.shellSort=shellSort;
	this.gaps=[5,3,1];
	this.mergeSort=mergeSort;
}

function quickSort(arr){
	if (arr.length===0){
		return []
	}
	let left=[];
	let right=[];
	let pivot=arr[0];
	for (let i=1;i<arr.length;i++){
		if (arr[i]<pivot){
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat(pivot,quickSort(right))
}
// 快速排序

let nums=new CArray(10);
nums.setData();
// console.log(nums.toString()+'\n');
let start=new Date().getTime();
nums.bubbleSort();
let stop=new Date().getTime();
console.log("冒泡排序："+(stop-start)+'\n');

nums.setData();
start=new Date().getTime();
nums.selectionSort();
stop=new Date().getTime();
console.log("选择排序："+(stop-start)+'\n');

nums.setData();
start=new Date().getTime();
nums.insertionSort();
stop=new Date().getTime();
console.log("插入排序："+(stop-start)+'\n');

nums.setData();
start=new Date().getTime();
nums.shellSort();
stop=new Date().getTime();
console.log("希尔排序："+(stop-start)+'\n');

nums.setData();
start=new Date().getTime();
nums.mergeSort();
stop=new Date().getTime();
console.log("归并排序："+(stop-start)+'\n');

nums.setData();
start=new Date().getTime();
nums.dataStore.sort();
stop=new Date().getTime();
console.log("内置排序："+(stop-start)+'\n');

nums.setData();
start=new Date().getTime();
newNums=quickSort(nums.dataStore);
stop=new Date().getTime();
console.log("快速排序："+(stop-start)+'\n');
