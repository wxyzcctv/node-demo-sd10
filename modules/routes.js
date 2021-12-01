const fs = require('fs');
const path = require('path');
const url = require('url');


let getFileMime = function (extname) {
    let data = fs.readFileSync(path.join(__dirname, '../data/mime.json'));
    let mime = JSON.parse(data.toString());
    return mime[extname]
}

exports.static = function (req, res, staticPath) {
    let pathName = req.url; // 获取到请求的url

    pathName = url.parse(pathName).pathname; // 使用url内置模块获取路径名

    pathName = pathName !== '/' ? pathName : '/index.html' // 获取到/就默认为/index.html

    let extname = path.extname(pathName);  // 使用内容模块path获取文件后缀名

    if (pathName !== "/favicon.ico") {
        try {
            let data = fs.readFileSync('./' + staticPath + pathName);
            if (data) {
                let mime = getFileMime(extname);  // 使用自定义模块根据后缀名获取Content-Type的值
                res.writeHead(200, {
                    "Content-Type": "" + mime + ";charset=UTF-8"
                });
                res.end(data);
            }
        } catch (error) {

        }
    }
}