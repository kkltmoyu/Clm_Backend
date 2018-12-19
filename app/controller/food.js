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
	//获取restaurant对应food
	async getFoodByRestaurant(ctx){
		try{
			const restaurantId = ctx.captures[0]
			let result = await FoodModel.find({
				restaurant_id:restaurantId
			}) 
			ctx.body = result
		}
		catch(error){
			ctx.status = 500;
			ctx.body = global.info.errorMsg.getListFailed
		}
	}
	//获取food信息
	async getFoodInfos(ctx){
		try{
			if(ctx.query.id.trim() === ''){
				ctx.status = 400;
				ctx.body = global.info.errorMsg.unknownParameters
			}
			else{
				let target = ctx.query.id.split(',')
				let condition = target.length > 1 ? {$in:target} : target[0] 
				let result = await FoodModel.find({
					item_id:condition
				}) 
				ctx.body = result
			}
		}
		catch(error){
			ctx.status = 500;
			ctx.body = global.info.errorMsg.getListFailed
		}
	}
	//增加count值
	async addCount(ctx){
		try{
			let {type,id,score} = ctx.query
			let suf;
			if(type === 'sales')
				suf = {
					$inc:{
						'sales_count' :score
					}
				}
			else if(type === 'click')
				suf = {
					$inc:{
						'click_count' :score
					}
				}
			else if(type === 'rating')
				suf = {
					$inc:{
						'rating_count' :score
					}
				}
			else{
				console.log(`unknown addCount type,type = ${type}`)
				ctx.status = 400;
				ctx.body = global.info.errorMsg.unknownParameters
			}
			let result = await FoodModel.updateMany({
				item_id:id
			},suf) 
			ctx.body = global.info.successMsg.updateSuccess
		}
		catch(error){
			ctx.status = 500;
			ctx.body = global.info.errorMsg.updateFailed
		}
	}
}

export default new Food()