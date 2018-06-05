// es5 声明函数
var fn = function (param) {
    console.log(param)
}
// es6 箭头函数
const arrow = (param) => {
    console.log(param)
}
// 如果只有一个参数且执行语句只有一行
const foo = fo => console.log(fo)
foo('test')
// 返回一个对象
const getObj = arg1 => ({arg1: arg1})
// 如果多个参数
const bar = (arg1,arg2) => {
    console.log(arg1, arg2)
}

// 对象的解构赋值
const obj = {a: 1,b: 2}
const make = ({a,b}) => {
    console.log(a,b)
}
make(obj)

// arrow function 的this指向

let makeObj = {
    id: 3,
    getIdByArrow: function () {
        setTimeout(()=>{
            console.log(this.id)
        }, 500)
    },
    getIdNoArrow: function () {
        let that = this
        setTimeout(()=>{
            console.log(that.id)
        }, 1500)
    },
}
makeObj.getIdByArrow()