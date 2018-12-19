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
    unknownParameters :{
        code:400,
        message:'参数错误',
    },
    createFailed :{
        code:500,
        message:'创建失败',
    },
    updateFailed:{
        code:500,
        message:'更新失败',
    },
    deleteFailed:{
        code:500,
        message:'删除失败',
    },
    mobileExisted :{
        code:500,
        message:'该手机号已注册，请直接登录',
    },
    getListFailed:{
        code:500,
        message:'查询失败'
    },
    serverException :{
        code:500,
        message:'服务端异常',
    },
    locateException:{
        code:500,
        message:'定位失败'
    },
    getRelatedAddressFailed:{
        code:500,
        message:'获取相关地址列表失败'
    }
}

const dbError = {
    queryFailed:{
        code:500,
        message:'数据库查询失败',
    }
}

export default {successMsg,errorMsg,dbError}