const mongoose=require('mongoose');

const Schema=mongoose.Schema({
    title:String,
    description:String,
    imageurl:String
    
})
const blogData=mongoose.model("blog",Schema);
module.exports=blogData;