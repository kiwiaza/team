var fs=require("fs");
function checkUser2(opi,next){
	fs.readFile("data/user.json","utf8",function(err,data){
		var use=JSON.parse(data);
		for(var i in use){
			if(opi.username==use[i].username){

				next(false)
				return
			}
		}
		next(true)
	})
}
function checkuser1(opi,next){
	fs.readFile("data/user.json","utf8",function(err,data){
		var userlist = JSON.parse(data);
		for(var i in userlist){
			if(userlist[i].username==opi.username&&userlist[i].password==opi.password){
				next(true);
				return;
			}
		}
		next(false);
	})
}

module.exports={
	checkUser2:checkUser2,
	checkuser1:checkuser1
}