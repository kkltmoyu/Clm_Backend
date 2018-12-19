import Router from 'koa-router'
import foodController from '../controller/food'

let foodTypeRouter = new Router()

foodTypeRouter.get('/foods',foodController.getAllFood)
foodTypeRouter.get('/restaurant/:id',foodController.getFoodByRestaurant)
foodTypeRouter.get('/food',foodController.getFoodInfos)
foodTypeRouter.get('/score/change',foodController.addCount)

export default foodTypeRouter