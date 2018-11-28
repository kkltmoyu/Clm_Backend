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

CitySchema.statics.getHotCities = function(){
	return new Promise(async (resolve, reject) => {
		try{
			const city = await this.find({}).sort({'sort':1}).limit(9);
			resolve(city)
		}catch(err){
			reject(global.info.dbError.queryFailed);
			console.error(err);
		}
	})
}

CitySchema.statics.getCityInfo = function(cityName){
	return new Promise(async (resolve, reject) => {
		try{
			const city = await this.findOne({name:cityName});
			resolve(city)
		}catch(err){
			reject(global.info.dbError.queryFailed);
			console.error(err);
		}
	})
}

let City = mongoose.model('City', CitySchema);

export default City