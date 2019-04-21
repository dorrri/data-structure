

// 求两个字符串的最长公共子序列

function longestCommonSequence(str1,str2) {
	if(!str1 || !str2){
		return [];
	}
	let len1=str1.length,
		len2=str2.length,
		dp=[];
	for(let i=0;i<len1+1;i++){
		dp[i]=[];
		for(let j=0;j<len2+1;j++){
			dp[i][j]=0;
		}
	}

	for(let i=1;i<len1+1;i++){
		for (let j=1;j<len2+1;j++){
			if(str1[i-1]===str2[j-1]){
				dp[i][j]=dp[i-1][j-1]+1;
			}else{
				dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
			}
		}
	}

	function printResult(i,j) {
		let set=new Set();
		if(i===0 || j===0){
			return new Set([""]);
		}else if (str1[i-1]===str2[j-1]) {
			printResult(i-1,j-1).forEach((s)=>{
				set.add(s+str1[i-1]);
			});
			return set;
		}else{
			if (dp[i][j-1]>=dp[i-1][j]){
				printResult(i,j-1).forEach((s)=>{
					set.add(s);
				});
			}
			if (dp[i][j-1]<=dp[i-1][j]){
				printResult(i-1,j).forEach((s)=>{
					set.add(s);
				});
			}
			return set;
		}
	}

	return printResult(len1,len2);
}


