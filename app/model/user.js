import mongoose from 'mongoose'
let Schema = mongoose.Schema;

let UserSchema = new Schema({
	avatar: {type: String, default: 'default.jpg'},
	city: String,
	pwd:String,
	registe_time: String,
	mobile:String,
	user_id:Number,
	login_state:{type:String,default:'logout'},
	user_name:{type:String,default:''},
	is_expire:{type:Boolean,default:false},
	address:Array,
});

UserSchema.methods.introduce = function() {
	console.log('my name is ',this.user_name)
}

let User = mongoose.model('User', UserSchema);

export default User