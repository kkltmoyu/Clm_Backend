import Router from 'koa-router'
import cityrControlloer from '../controller/city/city'

let cityRouter = new Router()

cityRouter.get('/getAll',cityrControlloer.getAllCities)
cityRouter.get('/getAllByChar',cityrControlloer.getAllCitiesByFirstChar)
cityRouter.get('/getOne',cityrControlloer.getOne)
cityRouter.post('/saveAll',cityrControlloer.saveAllToDbFlatten)

export default cityRouter
