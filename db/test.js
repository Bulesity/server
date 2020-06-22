const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/biji')
const conn = mongoose.connection
conn.on('connected',function(){
    console.log("链接数据库成功！")
})
const userSchema = mongoose.Schema({
    username:{type:String,require:true},
    password:{type:String,require:true},
   
})
const UserModel = mongoose.model('user',userSchema)
const md5 = require('blueimp-md5')

function testSave(){
   const userModel = new UserModel({username:'Bom',password:md5('456')})
   userModel.save(function(error,user){
       console.log('save()',error,user)
   })
}

function testFind(){
    UserModel.find(function (error,users) {
     console.log('Find()',error,users)
    })
    UserModel.findOne({_id:'5e97f30d6e943e102cc7c896'},function (error,user) {
        console.log('FindOne()',error,user)
    })

}
//testFind()
function testupdata() {
    UserModel.findByIdAndUpdate({_id:'5e97f30d6e943e102cc7c896'},{username:'jan'},function (error,doc) {
        console.log('updata()',error,doc)

    })

}
//testupdata()
function testDelete() {
    UserModel.remove({_id:'5e97f30d6e943e102cc7c896'},function (error,doc) {
        console.log('delete()',error,doc)
    })

}
//testDelete()
