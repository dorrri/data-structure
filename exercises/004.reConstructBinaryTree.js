
// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

/**
 * @param {number[]} pre
 * @param {number[]} vin
 * @return {TreeNode} node
 * */

function reConstructBinaryTree(pre, vin)
{
	// write code here
	if(pre==null || pre.length===0 || vin==null || vin.length===0) {
		return null;
	}
	let index=vin.indexOf(pre[0]),
		vinLeft=vin.slice(0,index),
		vinRight=vin.slice(index+1),
		preLeft=pre.slice(1,vinLeft.length+1),
		preRight=pre.slice(vinLeft.length+1);
	let node=new TreeNode(pre[0]);
	node.left=reConstructBinaryTree(preLeft,vinLeft);
	node.right=reConstructBinaryTree(preRight,vinRight);

	return node;
}

function TreeNode(x) {
	this.val = x;
	this.left = null;
	this.right = null;
}
console.log(reConstructBinaryTree([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6]));