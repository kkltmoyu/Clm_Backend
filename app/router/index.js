import Router from 'koa-router'
import userControlloer from '../controller/user/user'
import userRouter from './user'
import loginRouter from './login'
import db from '../db/db'

//¸ùÂ·ÓÉ
let indexRouter = new Router()
indexRouter.post('/sendP', userControlloer.postData);
indexRouter.get('/getOne',userControlloer.getUser);

indexRouter.use('/one', userRouter.routes(), userRouter.allowedMethods())
indexRouter.use('/two', loginRouter.routes(), loginRouter.allowedMethods())

export default indexRouter