const express=require('express');
require('dotenv').config();
const connectToDb=require('./config/db.js');
const cors=require('cors');

const app=express();

//Express middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());

// init connection to db
connectToDb();

app.get('/',(req,res)=>{
    res.send("HEllo World");
})

module.exports=app;