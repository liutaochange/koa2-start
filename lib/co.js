const co = require('co')
const fetch = require('node-fetch')

// co 会将传进去的generator函数 转化成promise
co(function *() {
    const res = yield fetch('https://api.douban.com/v2/movie/1291843')
    const movies = yield res.json()
    const movieContent = movies.summary
    console.log('co summary', movieContent)
})

// 或者直接使用async awiat
async function getContent() {
    const res = await fetch('https://api.douban.com/v2/movie/1291843')
    const movies = await res.json()
    const movieContent = movies.summary
    console.log('async summary', movieContent)
}
getContent()

// 模拟co 函数的实现
function run(generator) {
    const iterator = generator()
    const it = iterator.next()
    const promise = it.value
    promise.then(data => {
        const it2 = iterator.next(data)
        const promise2 = it2.value
        promise2.then(data2 => {
            iterator.next(data2)
        })
    })
}
run(function *() {
    const res = yield fetch('https://api.douban.com/v2/movie/1291843')
    const movies = yield res.json()
    const movieContent = movies.summary
    console.log('run summary', movieContent)
})