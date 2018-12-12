import Router from 'koa-router'
import foodTypeController from '../controller/foodType/foodType'

let foodTypeRouter = new Router()

foodTypeRouter.get('/all',foodTypeController.getAllFoodType)

export default foodTypeRouter