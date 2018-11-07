import Router from 'koa-router'

let userRouter = new Router()

userRouter.get('/', async(ctx, next) => {
    let url = ctx.url
    console.log('one router :/')

    let data = ctx.request.query
    let dataQueryString = ctx.request.querystring
    console.log('data is ',data)
    ctx.body = {
        url,
        data,
        dataQueryString
    }
})

export default userRouter
