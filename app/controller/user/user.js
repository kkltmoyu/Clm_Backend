import mongoose from 'mongoose'
import UserModal from '../../model/user'

class User {
	constructor() {
		this.getAllUser = this.getAllUser.bind(this)
		this.createUser = this.createUser.bind(this)
		this.validateUser = this.validateUser.bind(this)
		this.updateUser = this.updateUser.bind(this)
	}
	async getAllUser(ctx, next) {
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
			mobile: '17777676745'
		}
		try {
			//判断用户是否存在，key为手机号
			let user = await UserModal.findOne({ mobile: target.mobile })
			if (!user) {
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
						word: global.info.errorMsg.serverException
					}
				}
			}
			else {
				ctx.status = 500
				ctx.body = {
					word: global.info.errorMsg.mobileExisted
				}
			}
		}
		catch (e) {
			console.error('查询手机号是否已注册失败:', err);
			ctx.status = 500
			ctx.body = global.info.errorMsg.createUserFailed
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
}

export default new User()