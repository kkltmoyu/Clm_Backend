import mongoose from 'mongoose'
import foodData from '../datas/foodData'

const Schema = mongoose.Schema;

const foodSchema = new Schema({
	is_featured: {type: Number, default: 0},
	restaurant_id: {type: Number, isRequired: true},
	food_type_id: {type: Number, isRequired: true},
	pinyin_name: {type: String, default: ''},
	display_times: {type: Array, default: []},
	attrs: {type: Array, default: []},
	description: {type: String, default: ""},
	sales_count: {type: Number, default: 0},
	click_count: {type: Number, default: 0},
	rating_count: {type: Number, default: 0},
	rating_score: {type: Array, default: []},
	tips: String,
	image_path: String,
	specifications: [Schema.Types.Mixed],
	server_utc: {type: Date, default: Date.now()},
	is_essential: {type: Boolean, default: false},
	item_id: {type: Number, isRequired: true},
	name: {type: String, isRequired: true},
	activity: Schema.Types.Mixed,
})

const Food = mongoose.model('Food', foodSchema);

Food.findOne((err, data) => {
	if (!data) {
		for (let i = 0; i < foodData.length; i++) {
			Food.create(foodData[i]);
		}
	}
})

export default Food