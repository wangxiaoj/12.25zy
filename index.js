var http = require("http"),
fs = require('fs'),
querystring = require('querystring');
http.createServer(function(req,res){
 		res.setHeader('Access-Control-Allow-Origin','*');
 			//获取前台传过来的参数
 			var str = '';
 			req.on('data',function(date){
 		
 			str += date
 			})
 			req.on('end',function(err){

 				if(err) throw err;
 			var json = querystring.parse(str);
 			//读取Txt文本
 			 fs.readFile('./zc.txt','utf8',function(err,data){

 			if(err) throw err;

 		// 	//把文本里读取到的{}转成对象
 			var json1 = JSON.parse(data);
 			//end
 				if(json1[json.user]){
 					res.write('账号已注册')
 					res.end()
 				}else{
 					json1[json.user] = json.pass;
 					fs.writeFile('zc.txt',JSON.stringify(json1),function(err){
 						if(err) throw err;
 						res.write('注册成功')
 						res.end();
 					})
 				}
 			})
 			
 		})
 	}).listen(8003)



 	http.createServer(function(req,res){
 		res.setHeader('Access-Control-Allow-Origin','*');

 		//获取前台传过来的参数
 			var str = '';
 			req.on('data',function(date){
 		
 			str += date
 			})
 			req.on('end',function(err){
 				if(err) throw err;
 				var json = querystring.parse(str);
 				fs.readFile('./zc.txt','utf8',function(err,data){
 				  var json1 = JSON.parse(data);
 				
 				 if( json1[json.user] == json.pass){
 				  	res.write('登录成功');
 				  	res.end()
 				  		
 				  	}else{
 				  	res.write('账号密码错误');
 				  	res.end()
 				  	}
 				  

 				})
 			})
  
 	}).listen(8004)
 	
http.createServer(function(req,res){
 		res.setHeader('Access-Control-Allow-Origin','*');
 			//获取前台传过来的参数
 			var str = '';
 			req.on('data',function(date){
 			str += date
 			})
 			req.on('end',function(err){
 				if(err) throw err;
 			var json = querystring.parse(str);
 			//读取Txt文本
 			 fs.readFile('./nr.txt','utf8',function(err,data){
 			if(err) throw err;
 		// 	//把文本里读取到的{}转成对象
 			var json1 = JSON.parse(data);
 			//end
 					json1[json.qq] = json.con;
 					fs.writeFile('nr.txt',JSON.stringify(json1),function(err){
 						if(err) throw err;
 						res.write(JSON.stringify(json1))
 						res.end();
 					})
 			})
 			
 		})
 	}).listen(8006)
	

