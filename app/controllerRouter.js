const Router = require('koa-router')

// 装载所有子路由
let indexRouter = new Router()
indexRouter.post('/sendP', async(ctx) => {
    console.log('got post')
    ctx.body = '恭喜 hi1 你成功登陆了'
});
indexRouter.get('/getOne',async ctx => {
    console.log('getOne')
    ctx.body = {
        code: "1",
        msg: "succ"
    }
});

// 子路由1
let oneRouter = new Router()

oneRouter.get('/', async(ctx, next) => {
    let url = ctx.url
    console.log('one router :/')
    // 从ctx的request中拿到我们想要的数据
    let data = ctx.request.query
    let dataQueryString = ctx.request.querystring
    console.log('data is ',data)
    ctx.body = {
        url,
        data,
        dataQueryString
    }
})

// 子路由2
let twoRouter = new Router()
twoRouter.get('/:id', async(ctx, next) => {
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

indexRouter.use('/one', oneRouter.routes(), oneRouter.allowedMethods())
indexRouter.use('/two', twoRouter.routes(), twoRouter.allowedMethods())

module.exports = indexRouter