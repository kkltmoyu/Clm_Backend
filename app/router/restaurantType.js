import Router from 'koa-router'
import restaurantTypeController from '../controller/restaurantType'

let restaurantTypeRouter = new Router()

restaurantTypeRouter.get('/all',restaurantTypeController.getAllRestaurantType)

export default restaurantTypeRouter