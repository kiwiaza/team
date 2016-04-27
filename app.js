var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser=require("body-parser")
var express=require("express");
var app = express();
var checkUser=require("./modules/checkuser.js")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine","jade");
// 判断注册
app.post("/sign-up",function(req,res){
	checkUser.checkUser2(req.body,function(result){
		if(result){
			fs.readFile("data/user.json","utf8",function(err,data){
			var use=JSON.parse(data);
			// console.log(use)
			use.push(req.body);
			var user =JSON.stringify(use,null,4)
			// console.log(user)
			fs.writeFile("data/user.json",user)
			})
			res.send(result);
		}
		else{
			res.send(result);
		}
})
})	
// 判断用户名重复
app.post("/cwj",function(req,res){
	checkUser.checkUser2(req.body,function(result){
		res.send(result)
				
	})
})

// 判断登录
app.post("/login",function(req,res){
		console.log(req.body)
		checkUser.checkuser1(req.body,function(result){
 		res.send(result);
 		console.log(req.body)
 	})
})
app.listen(3000)
console.log("启动成功")