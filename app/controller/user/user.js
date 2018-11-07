import UserModal from '../../model/user'

class User{
	constructor(){

	}
	async getData(req, res, next){
		// let result = await UserModal.find({name:'night'});
		let target = {
			city:'北京市',
			registe_time:new Date().toLocaleString(),
			user_name:'night',
			mobile:'17777777777'
		}
		let user1 = UserModal(target)
		user1.introduce()
		try{
			await user1.save() 
			console.log('save success');
		}catch(err){
			console.log('save failed');
			throw new Error(err);
		}
		
		// console.log('result is ',result)
		// UserModal.introduce()
		// ctx.response.body = data
	    // req.body = {
	    //     code: "1",
	    //     msg: "succ"
	    // }
	    req.body = target
	}

	async postData(req, res, next){
		await console.log('got postData') 
	    req.body = {
		    word:'数据保存成功'
		}
	}
}

export default new User()