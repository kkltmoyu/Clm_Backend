import Router from 'koa-router'
import userControlloer from '../controller/user/user'

let userRouter = new Router()

userRouter.get('/register',userControlloer.createUser)
userRouter.get('/login',userControlloer.login)
userRouter.get('/logout',userControlloer.logout)
userRouter.get('/getAll',userControlloer.getAllUser)
userRouter.post('/validate',userControlloer.validateUser)
userRouter.get('/update',userControlloer.updateUser)
userRouter.get('/delete',userControlloer.deleteUser)

export default userRouter
