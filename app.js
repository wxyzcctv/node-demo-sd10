const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

let common = require('./modules/common');

http.createServer((req, res) => {

    let pathName = req.url; // 获取到请求的url

    pathName = url.parse(pathName).pathname; // 使用url内置模块获取路径名
    pathName = pathName !== '/' ? pathName : '/index.html' // 获取到/就默认为/index.html

    let extname = path.extname(pathName);  // 使用内容模块path获取文件后缀名

    if (pathName !== "/favicon.ico") {
        fs.readFile(path.join(__dirname, './static') + pathName, async (err, data) => {
            // 使用path根据当前路劲获得读取文件的相对路径
            if (err) {
                res.writeHead(404, {
                    "Content-Type": "text/html;charset=UTF-8"
                });
                res.end('404这个网页不存在');
            }
            // let mime = common.getMime(extname);  // 使用自定义模块根据后缀名获取Content-Type的值
            let mime = await common.getFileMime(extname);  // 使用自定义模块根据后缀名获取Content-Type的值

            res.writeHead(200, {
                "Content-Type": "" + mime + ";charset=UTF-8"
            });
            res.end(data);
        })
    }

}).listen(3000);

console.log("Server runing at http://127.0.0.1:3000");