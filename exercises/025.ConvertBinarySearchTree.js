
// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。

//在使用（...）时注意返回的是否都是数组类型
//null和undefined（return）都可以被压入数组，最好边界条件用[]返回

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
/**
 * @return {null}
 */
function Convert(pRootOfTree)
{
	// write code here
	if(!pRootOfTree){
		return null;
	}
	let nodes=[];
	nodes.push(...inOrder(pRootOfTree));
	if(nodes.length>=2){
		nodes[0].right=nodes[1];
		nodes[nodes.length-1].left=nodes[nodes.length-2];
	}
	for(let i=1;i<nodes.length-1;i++){
		nodes[i].left=nodes[i-1];
		nodes[i].right=nodes[i+1];
	}
	return nodes[0];


}
function inOrder(root){
	let nodes=[];
	if(root){
		nodes.push(...inOrder(root.left));
		nodes.push(root);
		nodes.push(...inOrder(root.right));
		return nodes;
	} else {
		return [];
	}
}


let root=new TreeNode(5);
root.left=new TreeNode(4);
root.right=new TreeNode(6);
console.log(Convert(root));