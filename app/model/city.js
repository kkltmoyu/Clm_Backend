import mongoose from 'mongoose'
let Schema = mongoose.Schema;

let CitySchema = new Schema({
    id: Number,
    name:String,
	abbr: String,
	area_code:String,
	sort:Number,
	lat:Number,
	lng:Number,
	is_map:{type:Boolean,default:true},
	pinyin:String,
});

CitySchema.methods.introduce = function() {
	// console.log('my name is ',this.user_name)
}

let City = mongoose.model('City', CitySchema);

export default City