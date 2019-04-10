
//是否可以通过交换字符串中的两个字符而使字符串成为回文串（只能交换一次）

function becomePlindrome(str) {
	if(!str){
		return 'No';
	}
	let len=str.length;
	for (let i=0;i<len;i++){
		for (let j=i+1;j<len;j++){
			if(str[i]!==str[j]){
				let s1=str.substring(0,i),
					s2=str.substring(i+1,j),
				    s3=str.substring(j+1);
				let result=isPlindrome(s1+str[j]+s2+str[i]+s3);
				if (result==='Yes'){
					return 'Yes';
				}
			}
		}
	}
	return 'No';
}

function isPlindrome(str) {
	let reverse='';
	for(let i=str.length-1;i>=0;i--){
		reverse+=str[i];
	}
	if (str===reverse){
		return 'Yes';
	}
}

console.log(becomePlindrome('edfgryrgfde'));