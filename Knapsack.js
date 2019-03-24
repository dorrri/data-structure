const Knapsack=(value,size,capacity)=>{
    if (value == null || value.length===0 || size==null || size.length===0
		|| capacity<=0 || value.length!==size.length){
    	return {};
	}
    let itemCount=value.length,
		dp=[],
	    result={};

    for (let i=0;i<itemCount+1;i++) {
    	dp[i]=[];
    	for (let j=0;j<capacity+1;j++) {
    		if (i===0 || j===0) {
    			dp[i][j]=0;
			} else {
    			if (size[i-1]>j) {
    				dp[i][j]=dp[i-1][j]; //如果第i个物品的体积大于背包总容量，则不拿这个物品
				} else {
    				dp[i][j]=Math.max(dp[i-1][j-size[i-1]]+value[i-1],dp[i-1][j]);
    				//否则有两种情况：拿或不拿，分别计算两种情况下的总价值，并取其中最大的值
				}
			}
		}
	} //计算dp动态矩阵，dp[i][j]表示在背包容积为j时面对第i个物品所能取到的最大价值

	result.value=dp[itemCount][capacity]; //矩阵右下角的值就是最后计算可以取到的最大价值

	let itemMark=[];//记录被拿的物品
	for (let i=itemCount,j=capacity;i>0;i--) {
		if (i===1) {
			itemMark[i-1]=(dp[i][j]>0)?1:0;
		} else {
			if (dp[i][j]===dp[i-1][j]) {
				itemMark[i-1]=0;
			} else {
				itemMark[i-1]=1;
				j-=size[i-1];
			}
		}
	} //回溯判断哪些物品被拿了

	let pickedItem=[];
	for (let i=0;i<itemCount;i++) {
		if (itemMark[i]===1) {
			pickedItem.push(i+1);
		}
	}
	result.pickedItem=pickedItem;

	return result;
};

let result=Knapsack([8, 10, 6, 3, 7, 2],[4,6,2,2,5,1],12);
console.log(result.value+'\n'+result.pickedItem);