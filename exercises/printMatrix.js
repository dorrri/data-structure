function printMatrix(matrix)
{
	// write code here
	if(matrix==null){
		return null;
	}
	let rows=matrix.length,
		cols=matrix[0].length,
		result=[],
		count=Math.ceil(Math.min(rows,cols)/2),
		start={row:0,col:0},
		end={row:rows-1,col:cols-1};
	for(let k=1;k<=count;k++){
		for(let i=start.row,j=start.col;j<cols-start.col;j++){
			result.push(matrix[i][j]);
		}
		for(let j=end.col,i=start.row+1;i<rows-start.row;i++){
			result.push(matrix[i][j]);
		}
		if(start.row!==end.row){
			for(let i=end.row,j=end.col-1;j>=start.col;j--){
				result.push(matrix[i][j]);
			}
		}
		if (start.col!==end.col){
			for(let j=start.col,i=end.row-1;i>start.row;i--){
				result.push(matrix[i][j]);
			}
		}

		start.row++;
		start.col++;
		end.row--;
		end.col--;
	}
	return result;
}

console.log(printMatrix([[1,2,3,4]]));