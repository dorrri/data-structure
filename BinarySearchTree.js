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
		}
	};

	this.root=null;
	this.insert=insert;
}