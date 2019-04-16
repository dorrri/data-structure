const maxCommonString=(str1,str2)=>{
	let result="",
	    max=0,
	    index=0;
	if (!str1 ||!str2) {
		return result
	}
	let len1=str1.length,
		len2=str2.length,
		dp=new Array(len1);
	for (let i=0;i<len1;i++) {
		dp[i]=new Array(len2);
		for (let j=0;j<len2;j++) {
			dp[i][j]=0;
		}
	} //初始化dp矩阵

	for (let i=0;i<len1;i++) {
		for (let j=0;j<len2;j++) {
			if (str1[i]===str2[j]) {
				if (i===0 || j===0) {
					dp[i][j]=1; //边界的情况
				} else {
					dp[i][j]=dp[i-1][j-1]+1;
				}
				if (dp[i][j]>max){
					max=dp[i][j];
					index=i;
				}
			}
		}
	} //计算dp矩阵
	result=str1.slice(index-max+1,index+1); //左闭右开
	return result
};

console.log(maxCommonString("fgioabcdet","tyuabcderh"));