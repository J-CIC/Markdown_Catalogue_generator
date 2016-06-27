function Catalogue(node_set_id,node_get_id){
	this.node_get=document.getElementById(node_get_id)||document.body;
	this.content = '';//最终目录内容
	this.id = 0;//记录当前锚点数
	this.url=window.location.href;//当前完整路径
	this.url = this.url.split('#')[0];//排除url中含有#的情况，防止干扰
	this.last_node=[0];//存放当前开启的h1~h6标签，不计算重复值
	this.last_id=0;//数组下标
	var a = this.countTotalElement(this.node_get);//返回值为所有节点总数
	this.content += "</ul>";//闭合最后一个锚点
	document.getElementById(node_set_id).innerHTML = this.content;//显示目录
}
Catalogue.prototype.countTotalElement=function(node_get){
	///Attribute nodeType值为2，表示节点属性
	///Comment   nodeType值为8，表示注释文本
	///Document  nodeType值为9，表示Document
	///DocumentFragment  nodeType值为11，表示Document片段
	///Element           nodeType值为1，表示元素节点
	///Text              nodeType值为3，表示文本节点
	var total=0;
	if(node_get.nodeType==1) //1代表节点的类型为Element
	{
		total++;
		var temp_node = 0;//当前节点初始化为0
		//确定当前的标签是h1~h7中哪一个
		switch(node_get.tagName.toLowerCase())
		{
			case "h1":{
				temp_node = 1;
				break;
			}
			case "h2":{
				temp_node = 2;
				break;
			}
			case "h3":{
				temp_node = 3;
				break;
			}
			case "h4":{
				temp_node = 4;
				break;
			}
			case "h5":{
				temp_node = 5;
				break;
			}
			case "h6":{
				temp_node = 6;
				break;
			}
			default:{
				break;
			}
		}
		if(temp_node>0)
		{
			this.id++;
			for(;temp_node<this.last_node[this.last_id];this.last_id--){
				if(this.last_id>1){
					this.content+="</ul>";
					this.tagNum--;
				}
				else{
					this.last_node[1]=temp_node;
					this.last_id++;
				}
			}
			if(temp_node>this.last_node[this.last_id])
			{
				this.content+="<ul>";
				++this.last_id;
				this.last_node[this.last_id]=temp_node;
				this.tagNum++;
			}
			node_get.setAttribute('id', 'tip' + this.id );
			this.content+="<li><a href="+'"'+this.url+"#tip"+this.id+'">'+node_get.innerText+"</a></li>\n";
		}
	}
	var childrens=node_get.childNodes;
	for(var i=0;i<childrens.length;i++)
	{
		total+=this.countTotalElement(childrens[i]);
	}
	return total;//返回总数
}
