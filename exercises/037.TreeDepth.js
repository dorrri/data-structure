

// 输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点
// （含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。


/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 * 这是我自己两分钟想出来的，牛逼坏了叉会儿腰
 * @return {number}
 */
function TreeDepth(pRoot)
{
	// write code here
	if(!pRoot){
		return 0;
	}
	return Math.max(TreeDepth(pRoot.left),TreeDepth(pRoot.right))+1;
}
