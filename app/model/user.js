import mongoose from 'mongoose'
let Schema = mongoose.Schema;

let UserSchema = new Schema({
	avatar: {type: String, default: 'default.jpg'},
	city: String,
	pwd:String,
	registe_time: String,
	mobile:String,
	user_id:Number,
	user_name:{type:String,default:''},
	is_expire:{type:Boolean,default:false},
});
UserSchema.index({user_id: 1});

UserSchema.methods.introduce = function() {
	// console.log('this is ',this)
	console.log('my name is ',this.user_name)
}

let User = mongoose.model('User', UserSchema);

export default User