

// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
// 输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007

/**
 * 归并排序的思想
 * @return {number}
 */
function InversePairs(data)
{
	// write code here
	if(!data || data.length===0){
		return 0;
	}
	let count=0,
		result=[];
	mergeSort(data);
	return count%1000000007;

	function mergeSort(data){
		let len=data.length,
			mid=Math.floor(len/2);
		if(len<2){
			return data;
		}
		let left=data.slice(0,mid),
			right=data.slice(mid);
		return mergeArr(mergeSort(left),mergeSort(right));
	}
	function mergeArr(left,right){
		let i=0,
			j=0,
			k=0;
		while(left.length>i && right.length>j){
			if(left[i]<=right[j]){
				result[k++]=left[i++];
			} else {
				count+=left.length-i;
				result[k++]=right[j++];
			}
		}
		while(i<left.length){
			result[k++]=left[i++];
		}
		while(j<right.length){
			result[k++]=right[j++];
		}
		return result.slice(0,k);
	}
}
