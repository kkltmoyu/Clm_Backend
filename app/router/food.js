import Router from 'koa-router'
import foodController from '../controller/food'

let foodTypeRouter = new Router()

foodTypeRouter.get('/foods',foodController.getAllFood)

export default foodTypeRouter