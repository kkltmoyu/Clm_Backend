import Router from 'koa-router'
import cityControlloer from '../controller/city/city'

let cityRouter = new Router()

cityRouter.get('/getAll',cityControlloer.getAllCities)
cityRouter.get('/getAllByChar',cityControlloer.getAllCitiesByFirstChar)
cityRouter.get('/getOne',cityControlloer.getOne)
cityRouter.get('/sketch',cityControlloer.sketchyCity)
cityRouter.get('/hotCities',cityControlloer.getHotCities)
cityRouter.get('/addressFill',cityControlloer.addressFillUp)

export default cityRouter