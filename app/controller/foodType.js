import mongoose from 'mongoose'
import FoodTypeModel from '../model/foodType'
import AddressService from '../base/addressService'

class FoodType extends AddressService{
    constructor() {
        super()
        
    }
    async getAllFoodType(ctx){
        try {
			let result = await FoodTypeModel.find() 
			ctx.body = result
		}
		catch (error) {
			ctx.status = 500;
			ctx.body = global.info.errorMsg.getListFailed
		}
    }
}

export default new FoodType()