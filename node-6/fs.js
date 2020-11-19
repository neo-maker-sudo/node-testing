var fs = require("fs");

var exist = fs.existsSync("women.jpg"); // fs.existsSync(path) 檢查文件是否存在
console.log(exist);

fs.stat("women.jpg",function(err,stat){ // fs.stat(path,callback)、fs.statSync(path) 檢查文件狀態
    if(!err){
        console.log(stat); // stat.isFile 確定是不是一個文件 stat.isDirectory 確定是不是一個文件夾
    }
    
});

fs.readdir(".",(err,files) => { // fs.readdir、fs.readdirSync 讀取目錄的結構，參數files為陣列
    if(!err){
        console.log(files);
    }
});
// fs.unlink(path,callback)、fs.unlinkSync(path) 刪除一個文件
// fs.truncate(path,len,callback)、fs.truncate(path,len) 截斷文件，將文件設定為指定大小(單位:字節)
// fs.mkdir(path[,mode],callback)、fs.mkdirSync(path[,mode]) 創建一個目錄
// fs.rmdir(path,callback)、fs.rmdir(path) 刪除一個目錄
// fs.rename(oldpath,newpath,callback)、fs,renameSync(oldpath,newpath) 對文件進行重新命名

fs.rename("women.jpg","women10.jpg",err => {
  if(!err){
      console.log("修改成功");
  }  
})

/* fs.watchFile(filename,options,listener) 監聽文件的修改
   filename : 監聽文件的名稱
   options :　配置選項
   listener : callback函式，當文件發生變化，便會執行。
   PS : callback有兩個參數 curr : 當前文件的狀態、perv : 修改前文件狀態，兩個都是stats對象
*/

fs.watchFile("120.TXT",{interval:1000},function(curr,prev){
    console.log(curr.size);
    console.log(prev.size);
    // console.log("質變了");
});
