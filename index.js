const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//midleware  eligible to parse
app.use(express.json());

//import routr
const blog = require('./routes/blog');
//mount
app.use('./api/vi', blog);

//connectin db
const connectwithdb = require('./config/database');
connectwithdb();

//server started
app.listen(PORT, (req, res)=>{
    console.log(`server started at port ${PORT}`);
})

//default route
app.get('/', (req, res)=>{
    console.log(" app is started automatically");
})
