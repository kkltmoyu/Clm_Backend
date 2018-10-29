const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')

// 子路由1
let oneRouter = new Router()

oneRouter.get('/', async (ctx, next) => {
	let url = ctx.url

  	// 从ctx的request中拿到我们想要的数据
  	let data = ctx.request.query
  	let dataQueryString = ctx.request.querystring
  	// console.log(data)
  	ctx.body = {
	    url,
	    data,
	    dataQueryString
	}
})

// 子路由2
let twoRouter = new Router()

twoRouter.get('/:id', async (ctx, next) => {
 	let data = ctx.params

  	ctx.body = data
}).get('/home', async (ctx , next) => {
  ctx.body = '你好, 我这里是home页'
})

// 装载所有子路由
let indexRouter = new Router()

indexRouter.use('/one',oneRouter.routes(), oneRouter.allowedMethods())
indexRouter.use('/two',twoRouter.routes(), twoRouter.allowedMethods())

app
  .use(indexRouter.routes())
  .use(indexRouter.allowedMethods())

app.listen(3333, ()=>{
  console.log('server is running at http://localhost:3333')
})
