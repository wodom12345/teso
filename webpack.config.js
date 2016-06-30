var htmlwebpackplugin=require("html-webpack-plugin");
var extractTextPlugin=require("extract-text-webpack-plugin");
module.exports={
	plugins:[new htmlwebpackplugin({
		template:"./index.html"
	}),new extractTextPlugin("style-bundle.css")],
	entry:{
		main:"./main.js",
		 
	},
	output:{
		path:"./dist",
		filename:"[name]-bundle.js"
	},
	module:{
		loaders:[
			{
				test:/\.html$/,
				loader:"html"
			},
			{
				test:/\.css$/,
				loader:extractTextPlugin.extract("css")
			},
			{
				test:/\.less/,
				loader:"style!css!less"
			}
		]
	},
	resolve:{
		extensions:["",".css"]
	}
}






