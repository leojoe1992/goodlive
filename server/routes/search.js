const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
	console.log(req.query)
	var list=[];
	var data=req.query.data;
	for(var i=0;i<10;i++){
		list[i]=data+i
	}
	res.send({code:1,msg:"OK",data:list});
	
})
module.exports=router;