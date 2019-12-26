const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.routes')
const PORT = 3000;


const app = express();

mongoose.connect('mongodb://localhost/test', 
    { useNewUrlParser: true , useUnifiedTopology: true } ,(error)=>{
    console.log('DATABASE CONNECTED');
    if(error){
        throw error
    }
});

app.use('/' , userRouter );

app.listen(PORT , ()=>{
    console.log(`The server is running at PORT :${ PORT }`)
})

