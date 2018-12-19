import RestaurantTypeModel from '../model/restaurantType'
import AddressService from '../base/addressService'

class RestaurantType extends AddressService{
    constructor() {
        super()
        
    }
    async getAllRestaurantType(ctx){
        try {
			let result = await RestaurantTypeModel.find() 
			ctx.body = result
		}
		catch (error) {
			ctx.status = 500;
			ctx.body = global.info.errorMsg.getListFailed
		}
    }
}

export default new RestaurantType()