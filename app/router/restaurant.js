import Router from 'koa-router'
import restaurantController from '../controller/restaurant'

let restaurantRouter = new Router()

restaurantRouter.get('/restaurants',restaurantController.getAllRestaurant)
restaurantRouter.get('/restaurant/:id',restaurantController.getRestaurantByType)
restaurantRouter.get('/test',restaurantController.restTest)

export default restaurantRouter