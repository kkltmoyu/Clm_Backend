import Router from 'koa-router'
import userControlloer from '../controller/user/user'

let userRouter = new Router()

userRouter.get('/create',userControlloer.createUser)
userRouter.get('/getAll',userControlloer.getAllUser)
userRouter.post('/validate',userControlloer.validateUser)
userRouter.post('/update',userControlloer.updateUser)

export default userRouter
