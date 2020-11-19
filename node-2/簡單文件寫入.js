// 非同步寫入 (簡單文件)
var fs = require("fs");
fs.writeFile("D:\\node\\test\\簡單文件寫入\\1234.TXT","這是簡單文件(異步)寫入的內容",{flag:"a"}, err => {
    if(!err){
        console.log("寫入成功");
    }
    else{
        console.log(err);
    }
});

// 同步寫入 (簡單文件)
var fs = require("fs");
// var content = "這是簡單文件(同步)寫入的內容";
fs.writeFileSync("D:\\node\\test\\簡單文件寫入\\123.TXT","這是簡單文件(同步)寫入的內容",{flag:"a"},2);
