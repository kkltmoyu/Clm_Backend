const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const cors = require('koa2-cors')

// 子路由1
// let oneRouter = new Router()

// oneRouter.get('/', async(ctx, next) => {
//     let url = ctx.url
//     console.log('one router :/')
//         // 从ctx的request中拿到我们想要的数据
//     let data = ctx.request.query
//     let dataQueryString = ctx.request.querystring
//         // console.log(data)
//     ctx.body = {
//         url,
//         data,
//         dataQueryString
//     }
// })

// 子路由2
// let twoRouter = new Router()

// twoRouter.get('/:id', async(ctx, next) => {
//     console.log('two router :/:id')
//     let data = ctx.params

//     ctx.body = data
// }).get('/home', async(ctx, next) => {
//     nsole.log('two router /home')
//     ctx.body = '你好, 我这里是home页'
// })

// 装载所有子路由
// let indexRouter = new Router()
// indexRouter.post('/', async(ctx) => {
//     console.log('got post')
//     ctx.body = '恭喜 hi1 你成功登陆了'
// });
// indexRouter.get('/getOne', async(ctx,next) => {
// app.get('/getOne', async(ctx,next) => {
//     console.log('got getOne')
//     // ctx.response.body = '恭喜 getOne'
//     // ctx.body = {
//     //   obj :'恭喜 getOne'
//     // }
//     if (ctx.request.accepts('xml')) {
//     	console.log('xml')
// 	    ctx.response.type = 'xml';
// 	    ctx.response.body = '<data>Hello World</data>';
// 	  } else if (ctx.request.accepts('json')) {
// 	  	console.log('json')
// 	    ctx.response.type = 'json';
// 	    ctx.response.body = { data: 'Hello World' };
// 	  } else if (ctx.request.accepts('html')) {
// 	  	console.log('html')
// 	    ctx.response.type = 'html';
// 	    ctx.response.body = '<p>Hello World</p>';
// 	  } else {
// 	  	  	console.log('text')
// 	    ctx.response.type = 'text';
// 	    ctx.response.body = 'Hello World';
// 	  }
// 	   await next();
// });

// indexRouter.use('/one', oneRouter.routes(), oneRouter.allowedMethods())
// indexRouter.use('/two', twoRouter.routes(), twoRouter.allowedMethods())

// const whiteList = ['http://192.168.1.100:8080']

// app.use(indexRouter.routes())
//     .use(indexRouter.allowedMethods())
    // app.use(async(ctx, next) => {
    //     // if (ctx.request.header.origin !== ctx.origin && whiteList.includes(ctx.request.header.origin)) {
    //         // console.log('in')
    //         ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
    //         ctx.set('Access-Control-Max-Age', 3600 * 24);
    //         ctx.set('Access-Control-Allow-Origin', ctx.request.header.origin);
    //         ctx.set('Access-Control-Allow-Credentials', true);
    //     // }
    //     await next();
    // })
// app.use(async(ctx, next) => {
//         if (ctx.method === 'OPTIONS') {
//             ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
//             ctx.set('Access-Control-Max-Age', 3600 * 24);
//             ctx.body = '';
//         }
//         await next();
//     });

// app.use(ctx => {
// 	console.log('hello')
//   ctx.response.body = {
//   	whatever:'Hello Koa'
//   };
// });

// app.listen(3333, () => {
//     console.log('server is running at http://localhost:3333')
// })

app.use(async (ctx, next) => {
 ctx.set('Access-Control-Allow-Origin', 'http://192.168.1.100:8080');
 await next();
});

let router = new Router()

router.get('/async-post',async ctx => {
	console.log('async-post')
	 ctx.body = {
	 code: "1",
	 msg: "succ"
	 }
});
 app.use(router.routes())




app.listen(3333, () => {
    console.log('server is running at http://localhost:3333')
})