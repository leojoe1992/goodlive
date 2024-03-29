const express=require("express");
const router=express.Router();
const pool=require("../pool");
//功能0:注册
app.get('/reg',(req,res)=>{
   //1.1获取post请求的数据
   var uname=req.query.uname;
   var upwd=req.query.upwd;
   var email=req.query.email;
   var phone=req.query.phone;
 console.log(uname+":"+upwd+"+"+email+":"+phone);
   //1.3执行SQL语句
   var sql=`INSERT INTO goodlive_reg VALUES(null,'${uname}',md5('${upwd}'),'${email}','${phone}')`;
   pool.query(sql,(err,result)=>{
     if(err) throw err;
     console.log(result);
     //如果插入成功
     if(result.affectedRows>0) {
       res.send({code:200,msg:"reg succ"});
     }
   });
});

app.get("/login",(req,res)=>{
  //6.1:接收网页传递数据 用户名和密码
  var u = req.query.uname;
  var p = req.query.upwd;

  //6.2:创建sql
  var sql = "SELECT id FROM goodlive_login";
  sql+=" WHERE uname = ? AND upwd = md5(?)";
  //6.3:执行sql语句并且获取返回结果
  pool.query(sql,[u,p],(err,result)=>{
   //6.4:判断登录是否成功
   if(err)throw err;
   //6.5:将结果返回网页
   if(result.length==0){
     res.send({code:-1,msg:"用户名或密码有误"})
   }else{
     //获取当前登录用户id
     //result=[{id:2}]
     var id = result[0].id;
     //将用户id保存session对象中
     //uid当前登录：用户凭证
     req.session.uid = id;
     //console.log(req.session);
     res.send({code:1,msg:"登录成功"});
   }
  });
})


module.exports=router; 