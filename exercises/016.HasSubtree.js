
// 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

/**
 * @return {boolean}
 */
function HasSubtree(pRoot1, pRoot2)
{
	// write code here
	if(pRoot1==null || pRoot2==null){
		return false;
	}
	let result=false;
	if(pRoot1.val===pRoot2.val){
		result=isTree2InTree1(pRoot1,pRoot2);
	}
	if(!result){
		result=HasSubtree(pRoot1.left,pRoot2);
	}
	if(!result){
		result=HasSubtree(pRoot1.right,pRoot2);
	}
	return result;
}

const isTree2InTree1=(node1,node2)=>{
	if(node2===null){
		return true;
	}
	if(node1===null){
		return false;
	}
	if(node1.val!==node2.val){
		return false;
	}
	return isTree2InTree1(node1.left,node2.left)&&isTree2InTree1(node1.right,node2.right);
};