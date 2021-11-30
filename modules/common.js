const fs = require('fs');
const path = require('path');

exports.getMime = function (extname) {

    switch (extname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/html';
    }

}

exports.getFileMime = function (extname) {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, '../data/mime.json'), (err, data) => {
            if (err) {
                console.log(err);
                reject(err)
                return err;
            }
            let mime = JSON.parse(data.toString());
            resolve(mime[extname])
        })
    })
}