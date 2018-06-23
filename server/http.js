const Koa = require('koa');
const app = new Koa();
// 中间件
const middle = async (ctx, next) => {
    ctx.type = 'text/html; charset=utf-8'
    await next()
}
const middle1 = async (ctx, next) => {
    ctx.body = 'hi'
    await next()
}
const middle2 = async (ctx, next) => {
    ctx.body = ctx.body + 'Luke'
}
app.use(async (ctx, next) => {
    ctx.body = 'hello koa'
});
app.listen(3000);

