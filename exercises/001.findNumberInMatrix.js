
/*在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都
按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

/**
 * @param {number[]} array
 * @param {number} target
 * @return {boolean}
 */
function Find(target, array)
{
	// write code here
	if(array===null){
		return false;
	}else{
		let row=array.length;
		let col=array[0].length;
		if(target<array[0][0]){
			return false;
		}
		if(target>array[row-1][col-1]){
			return false;
		}
		let i=row-1;
		let j=0;
		while(i>=0 && j<col){
			if(target===array[i][j]){
				return true
			}else if(target<array[i][j]){
				i--;
			}else{
				j++;
			}
		}
		return false
	}
}
