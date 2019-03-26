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
		let didSwap;
		for (let i=this.numElements;i>1;i--){
			didSwap=false;
			for (let j=0;j<i-1;j++){
				if (this.dataStore[j]>this.dataStore[j+1]){
					this.swap(j,j+1);
					didSwap=true;
				}
			}
			if (didSwap===false) {
				return;
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
	// 选择排序（为什么最好时间复杂度是O(n)？）

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

	const mergeSort=(arr)=>{
		if (arr.length<2){
			return arr;
		}
		let mid=Math.floor(arr.length/2);
		let leftArr=arr.slice(0,mid);
		let rightArr=arr.slice(mid);
		return mergeArrays(this.mergeSort(leftArr),this.mergeSort(rightArr));
	};
	const mergeArrays=(left,right)=>{
		let result=[];
        while (left.length>0 && right.length>0) {
        	if (left[0]<=right[0]) {
        		result.push(left.shift());
			} else {
        		result.push(right.shift());
			}
		}
		while(left.length){
        	result.push(left.shift());
		}
		while (right.length) {
        	result.push(right.shift());
		}
		return result;
	};
	// 归并排序

	const heapSort=()=>{
	    buildMaxHeap(this.dataStore);

	    for (let i=this.numElements-1;i>0;i--) {
	    	this.swap(0,i);
	    	adjustHeap(this.dataStore,0,i);
		}
	};
	const buildMaxHeap=(arr)=>{
	    for (let i=Math.floor(arr.length/2)-1;i>=0;i--) {
	    	adjustHeap(arr,i,arr.length);
		} 	
	};
	const adjustHeap=(arr,i,len)=>{
		for (let k=2*i+1;k<len;k=2*k+1) {
			if (k+1<len && arr[k]<arr[k+1]) {
				k++;
			}
			if (arr[k]>arr[i]) {
				this.swap(i,k);
				i=k; //将交换后的子节点重新作为根节点
			} else {
				break;
			}
		}
	};
	//堆排序

	const radixSort=()=>{
		let maxRadix=this.numElements.toString().length,
			dev=1,
			mod=10,
		    arrLen=this.numElements,
		    counter=[];
		
		for (let i=1;i<=maxRadix;i++,dev*=10,mod*=10) {

			for (let j=0;j<arrLen;j++) {
				let bucket=parseInt((this.dataStore[j]%mod)/dev);
				if (counter[bucket]===undefined) {
					counter[bucket]=[];
				}
				counter[bucket].push(this.dataStore[j]);
			}
			let counterLen=counter.length,
			    pos=0;
			for (let j=0;j<counterLen;j++) {
				let value=null;
				if (counter[j]!==undefined) {
					while((value=counter[j].shift())!==undefined) {
						this.dataStore[pos++]=value;
					}
				}
			}
		}
	};
	//基数排序

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
	this.heapSort=heapSort;
	this.radixSort=radixSort;
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

let nums=new CArray(10000);
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
let arr=nums.mergeSort(nums.dataStore);
stop=new Date().getTime();
console.log("归并排序："+(stop-start)+'\n');
// console.log(arr);

nums.setData();
start=new Date().getTime();
nums.dataStore.sort();
stop=new Date().getTime();
console.log("内置排序："+(stop-start)+'\n');

nums.setData();
start=new Date().getTime();
nums.heapSort();
stop=new Date().getTime();
console.log("堆排序："+(stop-start)+'\n');

nums.setData();
start=new Date().getTime();
newNums=quickSort(nums.dataStore);
stop=new Date().getTime();
console.log("快速排序："+(stop-start)+'\n');

nums.setData();
start=new Date().getTime();
nums.radixSort();
stop=new Date().getTime();
console.log("基数排序："+(stop-start)+'\n');
// console.log(nums.toString());


