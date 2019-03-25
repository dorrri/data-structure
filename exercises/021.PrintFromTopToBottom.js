
// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。


function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
/**
 * @return {Array}
 */
function PrintFromTopToBottom(root)
{
	// write code here
	if(root==null){
		return null;
	}
	let result=[],
		nodes=[];
	nodes.push(root);
	while(nodes.length!==0){
		let node=nodes.shift();
		if(node.left){
			nodes.push(node.left);
		}
		if(node.right){
			nodes.push(node.right);
		}
		result.push(node.val);
	}

return result;
}

let root=new TreeNode(1);
root.left=new TreeNode(2);
root.right=new TreeNode(3);
root.left.left=new TreeNode(4);
root.left.right=new TreeNode(5);
 root.right.left=new TreeNode(6);
 root.right.right=new TreeNode(7);


console.log(PrintFromTopToBottom(root));