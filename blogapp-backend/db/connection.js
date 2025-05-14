const mongoose=require('mongoose');
require('dotenv').config()

mongoose.connect('mongodb+srv://gayathri:gayathrips027@cluster0.rlnsp91.mongodb.net/blogDB?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('Connection established')
}).catch(()=>{
    console.log('Connection error')
})