import Router from 'koa-router'

let loginRouter = new Router()

loginRouter.get('/:id', async(ctx, next) => {
    console.log('two router :/:id')
    let data = ctx.params

    ctx.body = data
}).get('/home', async(ctx, next) => {
    console.log('two router /home')
    ctx.body = '你好, 我这里是home页'
}).post('/sendP', async(ctx) => {
    console.log('got post2')
    ctx.body = '恭喜 hi2 你成功登陆了'
});

export default loginRouter