const http = require('http');
const url = require('url');

let routes = require('./modules/routes');

http.createServer((req, res) => {

    routes.static(req, res, 'static')

    let pathName = url.parse(req.url).pathname;
    console.log(pathName);
    if (pathName === '/login') {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=UTF-8"
        });
        res.end('正在操作登录页面')
    } else if (pathName === '/register') {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=UTF-8"
        });
        res.end('正在操作注册页面')
    } else if (pathName === '/admin') {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=UTF-8"
        });
        res.end('处理之后的业务逻辑')
    } else {
        // res.writeHead(404, {
        //     "Content-Type": "text/html;charset=UTF-8"
        // });
        // res.end('404页面不存在')
    }

}).listen(3000);

console.log("Server runing at http://127.0.0.1:3000");