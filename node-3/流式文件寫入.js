var fs = require("fs");
var ws = fs.createWriteStream("d:\\node\\test\\3.流式文件寫入\\1234.TXT");
ws.once("open",function(){
    console.log("通道打開");
});
ws.once("close",function(){
    console.log("通道關閉");
});
ws.write("寫入成功1");
ws.write("寫入成功2");
ws.write("寫入成功3");
ws.write("寫入成功4");
ws.write("寫入成功5");

ws.end();