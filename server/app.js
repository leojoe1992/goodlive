// 搭建服务器
const express =require('express');
const cors=require("cors");
const bodyParser=require("body-parser");

//引入路由器
const search=require("./routes/search")

var app=express();
var server=app.listen(8000)//部署服务器监听8000
// 解决跨域问题
app.use(cors({
	origin:["http://127.0.0.1:5050"]
}));
// 使用中间件bodyParser
app.use(bodyParser.urlencoded({extended:false}));
// 托管静态资源
app.use(express.static('public'));