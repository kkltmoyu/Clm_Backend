import Router from 'koa-router'
import userRouter from './user'
import loginRouter from './login'
import cityRouter from './city'
import db from '../db/db'

//¸ùÂ·ÓÉ
let indexRouter = new Router()

indexRouter.use('/user', userRouter.routes(), userRouter.allowedMethods())
indexRouter.use('/login', loginRouter.routes(), loginRouter.allowedMethods())
indexRouter.use('/city', cityRouter.routes(), cityRouter.allowedMethods())

export default indexRouter