# Markdown_Catalogue_generator
Generate Catalogue for .md or .html by js &amp; css

### ScreenShot
![截图](/ScreenShot.png)

#### How to use:     
You just need to simply add this code to your markdown file and turn it into html and you will See the difference!    
```html
<div id='toc'>      
</div>
```    
put this div tag in the place where you want to show the Catalogue

And then add the js and css file to your html file or markdown file(and turn it to html file using hexo or others)    
You can download the js and css file through my github and modify it to meet your personal needs.    
I have written some chinese notes on the js file to make it easier to understand.    
You should use the file like this:   

```javascript
<script src="Catalogue.js"></script>     
<link href="Catalogue.css" rel="stylesheet">     
<script type="text/javascript">     
	new Catalogue('toc');     
</script>
```    

#### Some notes:     

> Note that the Catalogue accepts two arguments:(node_set_id,node_get_id)     

The node_set_id is the id of element that you want to put the Catalogue     
The node_get_id which can be null is the id of element which you want to Generate Catalogue.     
If node_get_id is null, and it will be replace by document.body.     
> Note that I change the url which contains "#" so you'd better check if your url contains "#"     

> Note that although the js takes the condition the disorder of tag h1~h6, you're still recommended to put the right order.

It works when you convert .md to .html(like using hexo) or use it directly in your .html.(Maybe you can use it with gist for a better effect)

---     
#### 功能：     
给markdown添加目录
#### 原理：      
通过遍历给定元素（默认为document.body）的所有h1~h6标签来在指定位置生成目录结构     
#### 使用方法：          
在需要生成目录的地方添加div标签，id可以修改，后面js代码对应修改即可      

```html
<div id='toc'>       
</div>
```

引入js文件       

```javascript
<script src="Catalogue.js"></script>     
<link href="Catalogue.css" rel="stylesheet">     
<script type="text/javascript">     
	new Catalogue('toc');     
</script>
```     

#### 注意事项     

注意：Catalogue接受两个参数，第一个参数是要显示目录的元素id，第二个默认为document.id，是要从哪里获取生成目录的信息，简单说就是在哪个节点遍历他和子节点的h1~h6标签     

注意：当网址中含有#时，js会将#和其后面的内容忽略（这是为了我hexo博客上的方便），若你遇到问题，请检查是不是这个原因        

注意：虽然这个js代码考虑了h1~h6标签可能是乱序的情况，但请尽量以正确的顺序放置markdown文件中的标题，以生成你想要的目录

只在md转html后生效，或在html中生效，单纯的.md文件未尝试，但在github上预览是无效的，你可以把.md转为html（像生成hexo博客一样），或者把.md放在gist中然后在你的html中引用你的gist，再生成你的目录。
