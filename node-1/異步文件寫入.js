// 同步寫入
var fs = require("fs");
var fd = fs.openSync("1234.TXT","w")
fs.writeSync(fd,"寫入成功",2)
fs.closeSync(fd);
console.log(fd);

// 非同步寫入
var fs = require("fs");
fs.open("123.TXT","w",function(err,fd){ //callback 函式
	if(!err){
		fs.write(fd,"執行成功",function(err){
			if(!err){
				console.log("寫入成功")
			}
		fs.close(fd,function(err){
			if(!err){
				console.log("關閉成功")
			}
		});
	});
	console.log(fd);
	}
	else{
		console.log(err);
	}
})
console.log("向下執行~~~")