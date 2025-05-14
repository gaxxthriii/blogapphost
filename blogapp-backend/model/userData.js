const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    userName:String,
    email:String,
    password:String
    
})
const userData=mongoose.model("userdetail",userSchema);
module.exports=userData;