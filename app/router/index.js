import Router from 'koa-router'
import userRouter from './user'
import loginRouter from './login'
import cityRouter from './city'
import foodTypeRouter from './foodType'
import foodRouter from './food'
import restaurantTypeRouter from './restaurantType'

let indexRouter = new Router()

indexRouter.use('/user', userRouter.routes(), userRouter.allowedMethods())
indexRouter.use('/login', loginRouter.routes(), loginRouter.allowedMethods())
indexRouter.use('/city', cityRouter.routes(), cityRouter.allowedMethods())
indexRouter.use('/food_type', foodTypeRouter.routes(), foodTypeRouter.allowedMethods())
indexRouter.use('/restaurant_type', restaurantTypeRouter.routes(), restaurantTypeRouter.allowedMethods())
indexRouter.use('/food', foodRouter.routes(), foodRouter.allowedMethods())

export default indexRouter