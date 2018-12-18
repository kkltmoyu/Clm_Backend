import mongoose from 'mongoose'
import restaurantData from '../datas/restaurantData'

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
	activities: [{
		description: String,
		icon_color: String,
		icon_name: String,
		id: Number,
		name: String,
	}],
	address: String,
	delivery_mode: {
        support_help_mode:{ type: Boolean, default: true},
		color: String,
		id: Number,
		is_solid: Boolean,
		text: String
    },
    city:{ type: String, default: "" },
	description: { type: String, default: "" },
	order_lead_time: { type: String, default: "" },
	float_delivery_fee: { type: Number, default: 0 },
	float_minimum_order_amount: { type: Number, default: 0 },
	id: Number,
	type: String,
	identification: {
		company_name: { type: String, default: "" },
		identificate_agency: { type: String, default: "" },
		identificate_date: { type: Date, default: Date.now },
		legal_person: { type: String, default: "" },
		licenses_date: { type: String, default: "" },
		licenses_number: { type: String, default: "" },
		licenses_scope: { type: String, default: "" },
		operation_period: { type: String, default: "" },
		registered_address: { type: String, default: "" },
		registered_number: { type: String, default: "" },
	},
	image_url: { type: String, default: "" },
	is_premium: { type: Boolean, default: false },
	is_new: { type: Boolean, default: false },
	lat: Number,
	lng: Number,
	license: {
		business_license_image: { type: String, default: "" },
		catering_service_license_image: { type: String, default: "" },
	},
	name: {
        type: String,
        required: true 
    },
	opening_hours: { type: Array, default: ["08:30/20:30"] },
	phone: String,
	promotion_info: { type: String, default: "欢迎光临，用餐高峰请提前下单，谢谢" },
	rating: { type: Number, default: 0 },
	rating_count: { type: Number, default: 0 },
	recent_order_num: { type: Number, default: 0 },
	status: { type: Number, default: 0 },
	supports: [{
		description: String,
		icon_color: String,
		icon_name: String,
		id: Number,
		name: String
	}],
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

Restaurant.findOne((err, data) => {
	if (!data) {
		for (let i = 0; i < restaurantData.length; i++) {
			Restaurant.create(restaurantData[i]);
		}
	}
})

export default Restaurant