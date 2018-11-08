const successMsg = {
    saveSuccess:{
        code:200,
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
    serverException :{
        code:500,
        message:'服务端异常',
    },

}

export default {successMsg,errorMsg}