//1.连接数据库
//1.1引入mongodb
const mongoose = require('mongoose')
const md5 = require('blueimp-md5')
//1.2连接数据库
mongoose.connect('mongodb://localhost:27017/biji')
//1.3获取连接对象
const  conn = mongoose.connection
//1.4绑定监听
conn.on('connected',function () {
    console.log('db connect success!')
})
//2.定义处对应特定合计的Model并向外暴露
//2.1 定义Schema（描述文档结构）
const  UserSchema = mongoose.Schema({
    username:{type:String,require:true},
    password:{type:String,require:true},
    type:{type:String,require:true}
})
//2.2 定义Model
const  UserModel = mongoose.model('user',UserSchema)
//2.3 向外暴露Model
exports.UserModel = UserModel
const NoteSchema = mongoose.Schema({
    user_id:{type:String,require:true},
    title:{type:String,require:true},
    content:{type:String,require:true},
    date:{type:String,require:true},
    label:{type:String,require:true},
    filename:{type:String,require:true}
})
const NoteModel = mongoose.model('note',NoteSchema)
exports.NoteModel = NoteModel
const FileSchema = mongoose.Schema({
    filename:{type:String,require:true},
    user_id:{type:String,require:true},

})
const FileModel = mongoose.model('file',FileSchema)
exports.FileModel = FileModel