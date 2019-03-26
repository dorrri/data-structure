
// 输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
// 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
// (注意: 在返回值的list中，数组长度大的数组靠前)


function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function FindPath(root, expectNumber)
{
	// write code here
	if(root==null || expectNumber==null){
		return [];
	}
	let paths=[],
		path=[],
		sum=0;
	dfs(root,sum);
	return paths;
	function dfs(node,sum){
		if(!node){
			return;
		}
		path.push(node.val);
		sum+=node.val;
		if(node.left===null && node.right===null && sum===expectNumber){
			paths.push(path.concat()); //这里如果直接push（path）的话，等于是将path的引用压进数组了，后面对path的操作会都反应到paths中
		}
		if(node.left){
			dfs(node.left,sum);
		}
		if(node.right){
			dfs(node.right,sum);
		}
		path.pop();
	}
}
