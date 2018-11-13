import Router from 'koa-router'
import userControlloer from '../controller/city/city'

let cityRouter = new Router()

cityRouter.get('/getAll',userControlloer.getAllCities)

export default cityRouter
