const successMsg = {
    saveSuccess:{
        type:'SAVE_SUCCESS',
        message:'保存成功'
    }
}

const errorMsg = {
    createUserFailed :{
        code:400,
        message:'创建用户失败',
    },
    mobileExisted :{
        code:400,
        message:'改手机号已注册，请直接登录',
    },
}

export default {successMsg,errorMsg}