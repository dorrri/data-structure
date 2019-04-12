



// 输入一棵二叉树，判断该二叉树是否是平衡二叉树。


/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 * @return {boolean}
 */
function IsBalanced_Solution(pRoot)
{
	// write code here
	if(!pRoot){
		return true;
	}
	return getDepth(pRoot)!==-1;
}
function getDepth(root){
	if(!root){
		return 0;
	}
	let left=getDepth(root.left),
		right=getDepth(root.right);
	if(left===-1 || right===-1){
		return -1;
	}
	if(Math.abs(left-right)>1){
		return -1;
	}
	return Math.max(left,right)+1;
}