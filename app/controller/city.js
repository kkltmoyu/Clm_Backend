import CityModel from '../model/city'
import Cities from '../datas/cityData'
import AddressService from '../base/addressService'
import _ from 'lodash'

class City extends AddressService{
    constructor() {
        super()
        this.getAllCities = this.getAllCities.bind(this)
        this.sketchyCity = this.sketchyCity.bind(this)
        this.getAllCitiesByFirstChar = this.getAllCitiesByFirstChar.bind(this)
        this.formatAllCities = this.formatAllCities.bind(this)
        this.addressFillUp = this.addressFillUp.bind(this)
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
        let cities = this.formatAllCities(Cities)
        try {
			ctx.body = {
                code:200,
                data:cities,
            }
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
    async sketchyCity(ctx){
        try{
            const sketchCity = await this.locateByIp(ctx)
            const cityName = sketchCity.name.slice(0,sketchCity.name.length-1)
            const city = await CityModel.getCityInfo(cityName)
            if(!city.code){
                ctx.body = {
                    code:200,
                    data:{
                        city:city
                    }
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
            if(city.code === 500){
                ctx.status = 500
                ctx.body = global.info.errorMsg.locateException
            }
            else{
                ctx.body = {
                    code:200,
                    data:city
                }
            }
        }
        catch(e){
            ctx.status = 500
            ctx.body = global.info.errorMsg.locateException
        }
    }
    formatAllCities(sourceData){
        let cities = []
        let keys = Object.keys(sourceData)
        let characters = keys.sort((a,b)=>{
            return a.charCodeAt() - b.charCodeAt()
        })
        for(let val of characters){
            let obj = {
                key:val,
                data:sourceData[val]
            }
            cities.push(obj)
        }
        return cities
    }
    async addressFillUp(ctx){
        try{
            const addressList = await this.addressSuggestion(ctx)
            ctx.body = {
                code:200,
                data:{
                    addressList:addressList
                }
            }
        }
        catch(e){
            ctx.status = 500
            ctx.body = global.info.errorMsg.getRelatedAddressFailed
        }
    }
}

export default new City()