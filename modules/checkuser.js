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

module.exports={checkUser2:checkUser2}