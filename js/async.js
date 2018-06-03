const fs = require('fs')
const util = require('util')
const readAsync = util.promisify(fs.readFile)
// async await 可以理解为generate 函数的语法糖 await类似于 yield
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