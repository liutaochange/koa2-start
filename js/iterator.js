function makeIterator(arr) {
    let nextIndex = 0
    // 返回迭代器对象
    return {
        next: () => {
            // next() 方法返回结果的对象
            if (nextIndex < arr.length) {
                return {
                    value: arr[nextIndex++],
                    done: false
                }
            }else{
                return {done: true}
            }
        }
    }
}
let arr = ['吃饭','睡觉','打魔兽']
const it = makeIterator(arr)
console.log('首先', it.next().value)
console.log('其次', it.next().value)
console.log('然后', it.next().value)
console.log('最后', it.next().done)

function *make (arr) {
    for (let i = 0; i < arr.length; i++){
        yield arr[i]
    }
}
const gen = make(arr)
console.log('首先', gen.next().value)
console.log('其次', gen.next().value)
console.log('然后', gen.next().value)
console.log('最后', gen.next().done)