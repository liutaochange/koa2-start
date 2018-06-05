const fs = require('fs')
const util = require('util')
const readAsync = util.promisify(fs.readFile)
// 最初通过回调函数实现
function readFile(callback) {
    fs.readFile('../package.json', (err,data) => {
        if (err) { callback(err)}
        callback(null, data)
    })
}
readFile((err, data) => {
    if (!err) {
        data = JSON.parse(data)
        console.log(data.license)
    }
})
// 通过promise实现
function readFileAsync() {
    return new Promise((resolve, reject) => {
        fs.readFile('../package.json', (err,data) => {
            if (err) { reject(err)}
            resolve(data)
        })
    })
}
readFileAsync().then((data) => {
    data = JSON.parse(data)
    console.log(data.license)
}).catch((err) => {
    console.log(err)
})

// async await 实现
async function init() {
    try {
        let data = await readAsync('../package.json')
        let author = JSON.parse(data).author
        console.log(author)
    }catch (e) {
        console.log(e)
    }
}
init()
