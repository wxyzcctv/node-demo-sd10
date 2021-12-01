const http = require('http');
const url = require('url');
let routes = require('./modules/routes');
const ejs = require('ejs')


http.createServer((req, res) => {

    routes.static(req, res, 'static')

    let pathName = url.parse(req.url).pathname;
    if (pathName === '/login') {
        ejs.renderFile('./views/form.ejs', (err, data) => {
            if (err) {
                console.log(err);
                return err;
            }
            res.writeHead(200, {
                "Content-Type": "text/html;charset=UTF-8"
            });
            res.end(data)
        })
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
    } else if (pathName === '/news') {
        console.log(req.method);
        let params = url.parse(req.url, true).query;
        console.log(params.page);
        res.writeHead(200, {
            "Content-Type": "text/html;charset=UTF-8"
        });
        res.end('获取get请求成功')
    } else if (pathName === '/doLogin') {
        let postStr = '';
        req.on('data', (chunk) => {
            postStr += chunk
        })
        req.on('end', () => {
            console.log(postStr);
            res.end(postStr)
        })
    }

}).listen(3000);

console.log("Server runing at http://127.0.0.1:3000");