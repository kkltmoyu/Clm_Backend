import Router from 'koa-router'
import restaurantTypeController from '../controller/restaurantType'

let restaurantTypeRouter = new Router()

restaurantTypeRouter.get('/restaurant-types',restaurantTypeController.getAllRestaurantType)

export default restaurantTypeRouter