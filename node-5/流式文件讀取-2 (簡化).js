var fs = require("fs");
var rs = fs.createReadStream("D:/node/test/women.jpg");
var ws = fs.createWriteStream("women5.jpg")

// rs.once("open",function(){
//     console.log("讀取開啟");
// });

// rs.once("close",function(){
//     console.log("讀取關閉");
//     ws.end();
// });

// ws.once("open",function(){
//     console.log("寫入開啟");
// });

// ws.once("close",function(){
//     console.log("寫入關閉");
// });

rs.pipe(ws);