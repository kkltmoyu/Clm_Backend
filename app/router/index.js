import Router from 'koa-router'
import userRouter from './user'
import loginRouter from './login'
import cityRouter from './city'
import foodTypeRouter from './foodType'
import foodRouter from './food'
import restaurantTypeRouter from './restaurantType'
import restaurantRouter from './restaurant'

let indexRouter = new Router()

indexRouter.use('/user', userRouter.routes(), userRouter.allowedMethods())
indexRouter.use('/login', loginRouter.routes(), loginRouter.allowedMethods())
indexRouter.use('/city', cityRouter.routes(), cityRouter.allowedMethods())
indexRouter.use('/food-type', foodTypeRouter.routes(), foodTypeRouter.allowedMethods())
indexRouter.use('/restaurant-type', restaurantTypeRouter.routes(), restaurantTypeRouter.allowedMethods())
indexRouter.use('/food', foodRouter.routes(), foodRouter.allowedMethods())
indexRouter.use('/restaurant', restaurantRouter.routes(), restaurantRouter.allowedMethods())

export default indexRouter