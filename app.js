import "babel-core/register"
import "babel-polyfill"
import Koa from 'koa'
import router from './app/router/index'
import constants from './app/utils/constants'
// import mongoDb from './app/db/mongo'
import redis from './app/db/redis'
import info from './app/utils/info'

global.info = info
global.Promise = require('bluebird')

const app = new Koa()

//监听uncaughtException，防止node进程挂掉
process.on('uncaughtException', function (err) {
  console.error('Unexpected exception: ' + err)
  console.error('Unexpected exception stack: ' + err.stack)
})

// app.context.db = 'mydb'
// const db = require('./app/db/db')
// indexRouter.get('/getOne', async(ctx,next) => {
// app.get('/getOne', async(ctx,next) => {
//     console.log('got getOne')
//     // ctx.response.body = 'æ?å–? getOne'
//     // ctx.body = {
//     //   obj :'æ?å–? getOne'
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

app.use(async (ctx, next) => {
    if (ctx.request.header.origin !== ctx.origin && constants.whiteList.includes(ctx.request.header.origin)) {
        ctx.set('Access-Control-Allow-Origin', ctx.request.header.origin);
        ctx.set('Access-Control-Allow-Credentials', true);
        ctx.set('X-Powered-By', ' 3.2.1');
    }
    await next();
})
    .use(async (ctx, next) => {
        // console.log('OPTIONS 1')
        if (ctx.method === 'OPTIONS') {
            // console.log('OPTIONS 2')
            ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET,OPTIONS');
            // ctx.set('Access-Control-Max-Age', 3600 * 24);
            ctx.set('Access-Control-Request-Headers', 'Origin,Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With,Accept');
            ctx.body = '';
        }
        await next();
    })
    .use(router.routes())
    .use(router.allowedMethods())

// app.on('error', err => {
//     console.error('server error1111111:', err)
// });

app.listen(3333, () => {
    console.log('server is running')
})