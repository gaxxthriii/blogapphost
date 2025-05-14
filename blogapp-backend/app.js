const express=require('express'); 
// const app=new express(); ///////
const morgan=require('morgan');
// app.use(morgan('dev'));////////
require('dotenv').config();
require('./db/connection');
const cors =require('cors');
const userRoutes = require('./Routes/userRoute');
const postRoutes=require('./Routes/postRoutes');
const PORT = process.env.PORT;


const app=new express(); 
app.use(morgan('dev'));
app.use(cors());


app.use('/blog',postRoutes);
app.use('/user',userRoutes);

app.listen(PORT,()=>{
    console.log(` ${PORT}is up and running `);
})


