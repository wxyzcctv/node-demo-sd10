const fs = require('fs');
const path = require('path');


exports.getFileMime = function (extname) {
    let data = fs.readFileSync(path.join(__dirname, '../data/mime.json'));
    let mime = JSON.parse(data.toString());
    return mime[extname]


    // return new Promise((resolve, reject) => {
    //     fs.readFile(path.join(__dirname, '../data/mime.json'), (err, data) => {
    //         if (err) {
    //             console.log(err);
    //             reject(err)
    //             return err;
    //         }
    //         let mime = JSON.parse(data.toString());
    //         resolve(mime[extname])
    //     })
    // })
}