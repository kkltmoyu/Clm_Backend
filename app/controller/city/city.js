import mongoose from 'mongoose'
import CityModel from '../../model/city'
import Cities from '../../utils/cities'
import _ from 'lodash'

class City {
    constructor() {
        this.getAllCities = this.getAllCities.bind(this)
    }
    async getAllCities(ctx, next) {
        //1000多个城市打平入库
        // try {
        //     let citiess = _.flatMapDepth(Object.values(Cities))
        //     for (let val of citiess) {
        //         let city = CityModel(val)
        //         try {
        //             await city.save()
        //         } catch (err) {
        //             throw new Error(err);
        //         }
        //     }
        // }
        // catch (error) {
        //     ctx.status = 500;
        //     ctx.body = global.info.errorMsg.getListFailed
        // }
    }
    
}

export default new City()