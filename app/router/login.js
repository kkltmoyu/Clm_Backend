import Router from 'koa-router'

let loginRouter = new Router()

loginRouter.get('/:id', async(ctx, next) => {
    console.log('two router :/:id')
    let data = ctx.params

    ctx.body = data
}).get('/home', async(ctx, next) => {
    console.log('two router /home')
    ctx.body = 'get success'
}).post('/sendP', async(ctx) => {
    console.log('got post2')
    ctx.body = 'post success'
});

export default loginRouter