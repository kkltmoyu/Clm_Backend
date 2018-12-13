import mongoose from 'mongoose'
import FoodModel from '../model/food'
import AddressService from '../base/addressService'

class Food extends AddressService{
    constructor() {
        super()
        
    }
    async getAllFood(ctx){
        try {
			let result = await FoodModel.find() 
			ctx.body = result
		}
		catch (error) {
			ctx.status = 500;
			ctx.body = global.info.errorMsg.getListFailed
		}
    }
}

export default new Food()