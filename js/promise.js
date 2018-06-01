const fs = require('fs')
const util = require('util')

// 最开始使用的方式，通过异步回调函数来读取
fs.readFile('../package.json', (err, data) => {
    if (err) { throw err }
    data = JSON.parse(data)
    console.log(data.name)
})

// 通过promise来封装 .then 来读取  .catch 来捕获异常
// 封装promise函数
function readFilePromise(path) {
    return new Promise((resolve,reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

readFilePromise('../package.json').then((data) => {
    console.log(JSON.parse(data).version)
}).catch((error) => {
    throw error
})

// 通过util.promisify 方法来把原生的异步函数转化为promise

const readFile = util.promisify(fs.readFile)
readFile('../package.json').then((data) => {
    console.log(JSON.parse(data).main)
}).catch((error) => {
    throw error
});