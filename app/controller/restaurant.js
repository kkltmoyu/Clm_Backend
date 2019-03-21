import RestaurantModel from '../model/restaurant'
import AddressService from '../base/addressService'
import redisPool from '../db/redis'

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
			let condition = decodeURIComponent(ctx.captures[0])
			const regex = new RegExp(condition);
			let result = await RestaurantModel.find({
				type:{
					$regex:regex
				}
			})
			ctx.body = result
		}
		catch (error) {
			ctx.status = 500;
			ctx.body = global.info.errorMsg.getListFailed
		}
    }
    async restTest(ctx){
    	try{
    		const resourcePromise = redisPool.acquire();
			await resourcePromise
			  	.then(function(client) {
				  	client.hgetall('multi',(err,v) =>{
						if(!err){
							ctx.body = v;
							redisPool.release(client);
						}
						else
							throw(err);
					})
				})
				.catch(function(err) {
					ctx.status = 500;
					ctx.body = global.info.errorMsg.getListFailed
				});
			// ctx.body = result;
    	}
    	catch(error){
    		ctx.status = 500;
			ctx.body = global.info.errorMsg.getListFailed
    	}
    }
}

export default new Restaurant()