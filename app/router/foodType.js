import Router from 'koa-router'
import foodTypeController from '../controller/foodType'

let foodTypeRouter = new Router()

foodTypeRouter.get('/food-types',foodTypeController.getAllFoodType)

export default foodTypeRouter