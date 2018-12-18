import mongoose from 'mongoose'
import RestaurantModel from '../model/restaurant'
import AddressService from '../base/addressService'

class Restaurant extends AddressService{
    constructor() {
        super()
        
    }
    async getAllRestaurant(ctx){
        try {
			let result = await RestaurantModel.find() 
			ctx.body = result
		}
		catch (error) {
			ctx.status = 500;
			ctx.body = global.info.errorMsg.getListFailed
		}
    }
    async getRestaurantByType(ctx){
        try {
            let path = ctx.query.type
			let result = await RestaurantModel.find() 
			ctx.body = result
		}
		catch (error) {
			ctx.status = 500;
			ctx.body = global.info.errorMsg.getListFailed
		}
    }
}

export default new Restaurant()