import mongoose from 'mongoose'
import UserModel from '../../model/user'

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
		// let user1 = UserModel(target)
		// user1.introduce()
		// try{
		// 	await user1.save() 
		// 	console.log('save success');
		// }catch(err){
		// 	console.log('save failed');
		// 	throw new Error(err);
		// }

		// let result = await UserModel.find({name:'night'});
		try {
			let result = await UserModel.find()
			ctx.body = result
		}
		catch (error) {
			ctx.status = 500;
			ctx.body = global.info.errorMsg.getUserListFailed
		}
	}

	async createUser(ctx, next) {
		let target = {
			_id: new mongoose.Types.ObjectId(),
			city: '北京市',
			pwd: '200',
			registe_time: new Date().toLocaleString(),
			user_name: 'night2221',
			mobile: '17777677745'
		}
		try {
			//判断用户是否存在，key为手机号
			let user = await UserModel.findOne({ mobile: target.mobile })
			if (!user) {
				let user = UserModel(target)
				try {
					await user.save()
					ctx.body = global.info.successMsg.saveSuccess
				} catch (err) {
					console.log('保存失败');
					ctx.status = 500
					ctx.body = global.info.errorMsg.createUserFailed
				}
			}
			else {
				ctx.status = 500
				ctx.body = global.info.errorMsg.mobileExisted
			}
		}
		catch (e) {
			console.error('查询手机号是否已注册失败:', e);
			ctx.status = 500
			ctx.body = global.info.errorMsg.createUserFailed
		}
	}

	async validateUser(ctx, next) {

	}

	async updateUser(ctx, next) {
		let target = {
			city: '北京市',
			pwd: '2002',
			registe_time: new Date().toLocaleString(),
			user_name: 'night2221fafa',
			mobile: '17777677745'
		}
		try {
			//判断用户是否存在，key为手机号

			let user = UserModel(target)
			try {
				await UserModel.deleteMany({ mobile: target.mobile }, target, { multi: true })
				ctx.body = global.info.successMsg.updateSuccess
			} catch (err) {
				console.log('更新失败,key:', target.mobile);
				ctx.status = 500
				ctx.body = global.info.errorMsg.updateFailed
			}
		}
		catch (e) {
			console.error('删除用户失败', err);
			ctx.status = 500
			ctx.body = global.info.errorMsg.createUserFailed
		}
	}

	async deleteUser(ctx, next) {
		let target = {
			city: '北京市',
			pwd: '2002',
			registe_time: new Date().toLocaleString(),
			user_name: 'night2221fafa',
			mobile: '17777677745'
		}
		try {
			await UserModel.deleteMany({ mobile: target.mobile })
			ctx.body = global.info.successMsg.deleteSuccess
		}
		catch (e) {
			ctx.status = 500
			ctx.body = global.info.errorMsg.deleteFailed
		}
	}

	async login(ctx,next){

	}
	
	async logout(ctx,next){
		
	}
}

export default new User()