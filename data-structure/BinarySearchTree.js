function Node(data,left,right) {
	const show=()=>this.data;

	this.data=data;
	this.left=left;
	this.right=right;
	this.show=show;
}

function BinarySearchTree() {
    const insert=(data)=>{
        let newNode=new Node(data,null,null);
        if (this.root===null){
        	this.root=newNode;
		} else {
        	let current=this.root;
        	let parent;
        	while (true){
        		parent=current;
        		if (data<current.data){
        			current=current.left;
        			if (current===null){
        				parent.left=newNode;
        				break;
					}
				} else {
        			current=current.right;
        			if (current===null){
        				parent.right=newNode;
        				break;
					}
				}
			}
			this.edgeCount++;
		}
        this.nodeCount++;
	};
    // 插入一个节点
    const inOrder=(node,str)=>{
    	if (node!==null){
    		str=this.inOrder(node.left,str);
    		str+=node.show()+" ";
    		str=this.inOrder(node.right,str);
		}
    	return str
	};
    // 以升序访问所有节点（中序遍历）
	const preOrder=(node,str)=>{
		if (node!==null){
			str+=node.show()+" ";
			str=this.preOrder(node.left,str);
			str=this.preOrder(node.right,str);
		}
		return str
	};
	// 以先序访问所有节点（先访问根节点，再以同样方式访问左子树和右子树）
	const postOrder=(node,str)=>{
		if (node!==null){
			str=this.postOrder(node.left,str);
			str=this.postOrder(node.right,str);
			str+=node.show()+" ";
		}
		return str
	};
	// 以后序访问所有节点（先访问叶子节点，从左子树到右子树，最后访问根节点）
    const getMin=(node)=>{
    	let current=node;
    	while (current.left!==null){
    		current=current.left;
		}
		return current;
	};
    // 找到二叉树中最小的值
	const getMax=(node)=>{
		let current=node;
		while (current.right!==null){
			current=current.right;
		}
		return current;
	};
	// 找到二叉树中最大的值
	const find=(data)=>{
		let current=this.root;
		while (current!==null) {
			if (current.data === data) {
				return current
			} else {
				if (data<current.data){
					current=current.left;
				} else {
					current=current.right;
				}
			}
		}
		return null
	};
	// 在二叉树中找到某个特定节点
	const remove=(data)=>{
		this.root=removeNode(this.root,data);
		this.nodeCount--;
		this.edgeCount--;
	};
	const removeNode=(node,data)=>{
	    if (node===null){
	    	return null
		}
	    if (data===node.data){
	    	if (node.left===null && node.right===null){
	    		return null
			}
	    	// 叶子节点
			if (node.left===null){
				return node.right
			}
			// 没有左节点的节点
			if (node.right===null){
				return node.left
			}
			// 没有右节点的节点
			let newNode=this.getMin(node.right);
			node.data=newNode.data;
			node.right=removeNode(node.right,newNode.data);
			return node
			// 有两个子节点的节点
		} else if (data<node.data){
	    	node.left=removeNode(node.left,data);
	    	return node
		} else {
	    	node.right=removeNode(node.right,data);
	    	return node
		}
	};
	// 删除某个节点

	this.root=null;
	this.insert=insert;
	this.inOrder=inOrder;
	this.preOrder=preOrder;
	this.postOrder=postOrder;
	this.getMin=getMin;
	this.getMax=getMax;
	this.find=find;
	this.remove=remove;
	this.nodeCount=0;
	this.edgeCount=0;
}

let bst=new BinarySearchTree();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(35);
bst.insert(51);
bst.insert(11);
bst.insert(87);
let strInOrder="";
let strPreOrder="";
let strPostOrder="";
strInOrder=bst.inOrder(bst.root,strInOrder);
strPreOrder=bst.preOrder(bst.root,strPreOrder);
strPostOrder=bst.postOrder(bst.root,strPostOrder);
console.log(strInOrder);
console.log(strPreOrder);
console.log(strPostOrder);
console.log(bst.getMin(bst.root).data);
console.log(bst.getMax(bst.root).data);
// console.log(bst.find(51));
bst.remove(45);
console.log(bst.inOrder(bst.root,""));
console.log(bst.preOrder(bst.root,""));
console.log(bst.nodeCount,bst.edgeCount);

