import Router from 'koa-router'
import userRouter from './user'
import loginRouter from './login'
import cityRouter from './city'
import foodTypeRouter from './foodType'
import restaurantTypeRouter from './restaurantType'

let indexRouter = new Router()

indexRouter.use('/user', userRouter.routes(), userRouter.allowedMethods())
indexRouter.use('/login', loginRouter.routes(), loginRouter.allowedMethods())
indexRouter.use('/city', cityRouter.routes(), cityRouter.allowedMethods())
indexRouter.use('/foodType', foodTypeRouter.routes(), foodTypeRouter.allowedMethods())
indexRouter.use('/restaurantType', restaurantTypeRouter.routes(), restaurantTypeRouter.allowedMethods())

export default indexRouter