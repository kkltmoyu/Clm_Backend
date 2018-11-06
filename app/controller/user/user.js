import UserModal from '../../model/user'

class User{
	constructor(){

	}
	async getData(req, res, next){
		let result = await UserModal.findOne({name:'12334wtwt'});
		console.log('result is ',result)
		// ctx.response.body = data
	    // req.body = {
	    //     code: "1",
	    //     msg: "succ"
	    // }
	    req.body = result
	}

	async postData(req, res, next){
		await console.log('got postData') 
	    req.body = {
		    word:'恭喜 hi1 你成功登陆了'
		}
	}
}

export default new User()