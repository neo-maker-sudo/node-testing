var fs = require("fs");
var path = "D:/node/test/women.jpg";
fs.readFile(path,function(err,data){
    if(!err){
        // console.log(data);
        fs.writeFile("women2.jpg",data,function(err){ // 讀取成功後，再直接寫入另一個
            if(!err){
                console.log("載入成功");
            }
        });
    }    
});