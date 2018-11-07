'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _index = require('./app/router/index');

var _index2 = _interopRequireDefault(_index);

var _constants = require('./app/utils/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();
// const db = require('./app/db/db')
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

app.use(async (ctx, next) => {
    // console.log('in 1')
    if (ctx.request.header.origin !== ctx.origin && _constants2.default.whiteList.includes(ctx.request.header.origin)) {
        ctx.set('Access-Control-Allow-Origin', ctx.request.header.origin);
        ctx.set('Access-Control-Allow-Credentials', true);
        ctx.set('X-Powered-By', ' 3.2.1');
    }
    await next();
}).use(async (ctx, next) => {
    // console.log('OPTIONS 1')
    if (ctx.method === 'OPTIONS') {
        // console.log('OPTIONS 2')
        ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET,OPTIONS');
        // ctx.set('Access-Control-Max-Age', 3600 * 24);
        ctx.set('Access-Control-Request-Headers', 'Origin,Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With,Accept');
        ctx.body = '';
    }
    await next();
}).use(_index2.default.routes()).use(_index2.default.allowedMethods());

app.listen(3333, () => {
    console.log('server is running');
});
//# sourceMappingURL=app.js.map