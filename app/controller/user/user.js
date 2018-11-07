import UserModal from '../../model/user'

class User {
	constructor() {

	}
	async getUser(ctx, next) {
		// let target = {
		// 	city:'Â±Â±Â¾Â©ÃŠÃ',
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
		try{
			// let result = await UserModal.find((err, user) => {
			// 	if (err) return console.error('error is ',err);
			// 	console.log(user);
			// });
			// console.log('ctx is ',ctx)
			// let coo = ctx.cookies.get('cook')
			let result = await UserModal.find() 
			ctx.body = result
		}
		catch(error){
			ctx.status = error.statusCode || error.status || global.errorInfo.errorCode['500'];
			ctx.body = global.errorInfo.errorMsg.createUserFailed
			// ctx.throw(500,'error',global.errorInfo.errorMsg.createUserFailed)
		}
	}

	async createUser(ctx, next) {
		let target = {
			city: '北京市',
			registe_time: new Date().toLocaleString(),
			user_name: 'night',
			mobile: '17777777777'
		}
		let user = UserModal(target)
		try {
			await user.save()
			console.log('保存成功');
		} catch (err) {
			console.log('保存失败');
			// throw new Error(err);
		}
	}

	async updateUser(ctx, next) {

	}

	async postData(ctx, next) {
		await console.log('got postData')
		ctx.body = {
			word: 'test'
		}
	}
}

export default new User()