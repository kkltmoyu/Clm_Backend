import mongoose from 'mongoose'
let Schema = mongoose.Schema;

// 定义表结构
let UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
});

// 参数User 数据库中的集合名称, 不存在会创建.
let User = mongoose.model('User', UserSchema);

export default User