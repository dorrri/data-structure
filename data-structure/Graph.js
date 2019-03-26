function Vertex(label) {
	this.label=label;
}

function Graph(v) {
    const addEdge=(v,w)=>{
    	this.adj[v].push(w);
    	this.adj[w].push(v);
    	this.edges++;
	};
    // 添加一条边
	const showGraph=()=>{
		for (let i=0;i<this.vertexCount;i++){
			let str=i+"->";
			for (let j=0;j<this.vertexCount;j++){
				if (this.adj[i][j]!==undefined){
					str+=this.adj[i][j]+" ";
				}
			}
			console.log(str);
		}
	};
	// 按顺序打印图
	const depthFirst=(v)=>{
		this.clearMarks();
		let route=[];
		this.marked[v]=true;
		for (let j=0;j<this.adj[v].length;j++) {
			route[j]=[];
			route[j].push(v);
			route[j].push(...dfs(this.adj[v][j]))
		}
		return route;
	};
	const dfs=(v)=>{
		let route=[];
		this.marked[v]=true;
		route.push(v);
		for(let j=0;j<this.adj[v].length;j++){
			if (!this.marked[this.adj[v][j]]) {
				route.push(...dfs(this.adj[v][j]));
			}
		}
		return route
	};
	// 深度优先遍历图
	const breadthFirst=(v)=>{
	    let queue=[];
	    let route=[];
	    this.clearMarks();
	    this.marked[v]=true;
	    queue.push(v);
	    route.push(v);
	    while (queue.length>0){
	    	let v=queue.shift();
	    	for (let j=0;j<this.adj[v].length;j++){
	    		if (!this.marked[this.adj[v][j]]){
	    			queue.push(this.adj[v][j]);
	    			this.marked[this.adj[v][j]]=true;
	    			route.push(this.adj[v][j]);
				}
			}
		}
		return route
	};
	// 广度优先遍历图
    const pathTo=(source,dest)=>{
    	let route=this.depthFirst(source);
    	let path=route.filter(r=>r.includes(dest));
    	if (path){
    		path=path.map(p=>p.slice(0,p.indexOf(dest)+1));
    		path.sort((p1,p2)=>p1.length-p2.length);
    		return path[0];
		} else {
    		return false;
		}
	};
    // 查找两个顶点间的最短路径
	const clearMarks=()=>{
		for (let i=0;i<this.vertexCount;i++) {
			this.marked[i]=false;
		}
	};
	// 清空访问标记数组

	this.vertexCount=v;
	this.edges=0;
	this.adj=[];
	for (let i=0;i<this.vertexCount;i++){
		this.adj[i]=[];
	}
	this.addEdge=addEdge;
	this.showGraph=showGraph;
	this.marked=[];
	for (let i=0;i<this.vertexCount;i++) {
		this.marked[i]=false;
	}
	this.depthFirst=depthFirst;
	this.breadthFirst=breadthFirst;
	this.clearMarks=clearMarks;
	this.edgeTo=[];
	this.pathTo=pathTo;
}

let g=new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.addEdge(0,4);
g.showGraph();
console.log(g.adj);
console.log(g.depthFirst(0));
console.log(g.breadthFirst(0));
console.log(g.pathTo(4,0));
