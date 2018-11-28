import mongoose from 'mongoose'
import CityModel from '../../model/city'
import Cities from '../../utils/cities'
import AddressService from '../../base/addressService'
import _ from 'lodash'

class City extends AddressService{
    constructor() {
        super()
        this.getAllCities = this.getAllCities.bind(this)
        this.sketchyCity = this.sketchyCity.bind(this)
    }
    async getAllCities(ctx) {
        try {
			let result = await CityModel.find()
			ctx.body = result
		}
		catch (error) {
			ctx.status = 500;
			ctx.body = global.info.errorMsg.getListFailed
		}
    }
    async getAllCitiesByFirstChar(ctx){
        try {
			ctx.body = Cities
		}
		catch (error) {
			ctx.status = 500;
			ctx.body = global.info.errorMsg.getListFailed
		}
    }
    async getOne(ctx){
        try {
            const city = ctx.query.city
			let result = await CityModel.findOne({
                name:city
            })
			ctx.body = result
		}
		catch (error) {
			ctx.status = 500;
			ctx.body = global.info.errorMsg.getListFailed
		}
    }
    async saveAllToDbFlatten(ctx){
        //1000多个城市打平入库
        try {
            let citiess = _.flatMapDepth(Object.values(Cities))
            for (let val of citiess) {
                let city = CityModel(val)
                try {
                    await city.save()
                    ctx.body = global.info.successMsg.saveSuccess
                } catch (err) {
                    throw new Error(err);
                }
            }
        }
        catch (error) {
            ctx.status = 500;
            ctx.body = global.info.errorMsg.getListFailed
        }
    }
    async sketchyCity(ctx){
        try{
            const sketchCity = await this.locateByIp(ctx)
            const cityName = sketchCity.name.slice(0,sketchCity.name.length-1)
            const city = await CityModel.getCityInfo(cityName)
            if(!city.code){
                ctx.body = {
                    city:city
                }
            }
            else{
                ctx.status = city.code
                ctx.body = global.info.errorMsg.locateException
            }
        }
        catch(e){
            ctx.status = 500
            ctx.body = global.info.errorMsg.locateException
        }
    }
    async getHotCities(ctx){
        try{
            const city = await CityModel.getHotCities()
            if(city.code === 500)
                ctx.status = 500
            ctx.body = city
        }
        catch(e){
            ctx.status = 500
            ctx.body = global.info.errorMsg.locateException
        }
    }
}

export default new City()