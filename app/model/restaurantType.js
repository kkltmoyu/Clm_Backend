import mongoose from 'mongoose'
import restaurantTypeData from '../datas/restaurantTypeData'

const Schema = mongoose.Schema;

const restaurantTypeSchema = new Schema({
	count: Number,
	id: Number,
	ids: [],
	level: Number,
	name: String,
	sub_categories: [
		{
			count: Number,
			id: Number,
			level: Number,
			name: String
		},
	]
});

const RestaurantType = mongoose.model('RestaurantType', restaurantTypeSchema)

RestaurantType.findOne((err, data) => {
	if (!data) {
		for (let i = 0; i < restaurantTypeData.length; i++) {
			RestaurantType.create(restaurantTypeData[i]);
		}
	}
})

export default RestaurantType