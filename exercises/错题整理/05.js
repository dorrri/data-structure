

// 基数排序

function digitSort(arr){
	if(!arr || arr.length<2){
		return arr;
	}
	let digits=getMaxDigits(arr),
		len=arr.length,
		buckets=[],
		counts=[];

	for (let i=0;i<10;i++){
		counts[i]=0;
	}

	for (let k=1;k<=digits;k++){
		for(let i=0;i<len;i++){
			let n=getDigit(arr[i],k);
			counts[n]++;
		}
		for (let j=1;j<10;j++){
			counts[j]+=counts[j-1];
		}
		for (let i=len-1;i>=0;i--){
			let n=getDigit(arr[i],k);
			buckets[counts[n]-1]=arr[i];
			counts[n]--;
		}// 这里从后往前遍历
		for (let i=0;i<10;i++){
			counts[i]=0;
		}
		for (let i=0;i<len;i++){
			arr[i]=buckets[i];
		}
	}
	return arr;
}

function getMaxDigits(arr) {
	if(!arr || arr.length<1){
		return 0;
	}
	let len=arr.length,
		max=arr[0],
	    digits=0;
	for (let i=1;i<len;i++){
		max=arr[i]>max?arr[i]:max;
	}
	while(max!==0){
		max=Math.floor(max/10);
		digits++;
	}
	return digits;
}

function getDigit(num,d) {
	if(num==null){
		return 0;
	}
	let digit=0;
	for(let i=1;i<=d;i++){
		digit=num%10;
		num=Math.floor(num/10);
	}
	return digit;
}

console.log(digitSort([135,678,4,66,99,346,54,7,0,6,2,1]));