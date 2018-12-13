import Router from 'koa-router'
import foodController from '../controller/food'

let foodTypeRouter = new Router()

foodTypeRouter.get('/all',foodController.getAllFood)

export default foodTypeRouter