const successMsg = {
    saveSuccess:{
        code:200,
        message:'保存成功'
    },
    updateSuccess:{
        code:200,
        message:'更新成功'
    },
    deleteSuccess:{
        code:200,
        message:'删除成功'
    }
}

const errorMsg = {
    createFailed :{
        code:400,
        message:'创建失败',
    },
    updateFailed:{
        code:400,
        message:'更新失败',
    },
    deleteFailed:{
        code:400,
        message:'删除失败',
    },
    mobileExisted :{
        code:400,
        message:'该手机号已注册，请直接登录',
    },
    getListFailed:{
        code:400,
        message:'查询失败'
    },
    serverException :{
        code:500,
        message:'服务端异常',
    },
    locateException:{
        code:500,
        message:'定位失败'
    }
}

const dbError = {
    queryFailed:{
        code:500,
        message:'数据库查询失败',
    }
}

export default {successMsg,errorMsg,dbError}