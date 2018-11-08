import mongoose from 'mongoose'
import UserModal from '../../model/user'

class User {
	constructor() {
		this.checkMobileExist = this.checkMobileExist.bind(this)
	}
	async getUser(ctx, next) {
		// let target = {
		// 	city:'北京市',
		// 	registe_time:new Date().toLocaleString(),
		// 	user_name:'night',
		// 	mobile:'17777777777'
		// }
		// let user1 = UserModal(target)
		// user1.introduce()
		// try{
		// 	await user1.save() 
		// 	console.log('save success');
		// }catch(err){
		// 	console.log('save failed');
		// 	throw new Error(err);
		// }

		// let result = await UserModal.find({name:'night'});
		try {
			// let result = await UserModal.find((err, user) => {
			// 	if (err) return console.error('error is ',err);
			// 	console.log(user);
			// });
			let coo = ctx.cookies.get('cook')
			let result = await UserModal.find()
			ctx.body = result
		}
		catch (error) {
			ctx.status = 500;
			ctx.body = global.errorInfo.errorMsg.createUserFailed
			// ctx.throw(500,'error',global.errorInfo.errorMsg.createUserFailed)
		}
	}

	async createUser(ctx, next) {
		let target = {
			_id: new mongoose.Types.ObjectId(),
			city: '北京市',
			pwd: '200',
			registe_time: new Date().toLocaleString(),
			user_name: 'night2221',
			mobile: '17777777745'
		}
		let isValid = this.checkMobileExist(ctx, target.mobile)
		if(isValid){
			let user = UserModal(target)
			try {
				await user.save()
				ctx.body = {
					word: global.info.successMsg.saveSuccess
				}
			} catch (err) {
				console.log('保存失败');
				ctx.status = 500
				ctx.body = {
					word: global.info.errorMsg.saveSuccess
				}
			}
		}
		else{
			ctx.status = 500
			ctx.body = {
				word: global.info.errorMsg.mobileExisted
			}
		}
		
	}

	async validateUser(ctx, next) {

	}

	async updateUser(ctx, next) {

	}

	async postData(ctx, next) {
		// await console.log('got postData')
		ctx.body = {
			word: 'test'
		}
	}

	checkMobileExist(ctx, mobile) {
		await UserModal.find((err, user) => {
			if (err) {
				console.error('查询手机号是否已注册失败:', err);
				ctx.status = 500
				ctx.body = global.info.errorMsg.createUserFailed
			}
			else {
				if (user) {
					return false
				}
				else
					return true
			}
		}
	}

}

export default new User()