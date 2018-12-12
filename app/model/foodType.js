import mongoose from 'mongoose'
import foodTypeData from '../datas/foodTypeData'

const Schema = mongoose.Schema;

const foodTypeSchema = new Schema({
	id: Number,
	is_in_serving: Boolean,
	description: String,
	title: String,
});

const FoodType = mongoose.model('FoodType', foodTypeSchema)

FoodType.findOne((err, data) => {
	if (!data) {
		for (let i = 0; i < foodTypeData.length; i++) {
			FoodType.create(foodTypeData[i]);
		}
	}
})

export default FoodType