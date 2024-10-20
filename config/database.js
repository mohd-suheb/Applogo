const mongoose = require('mongoose');


require("dotenv").config();
const connectwithdb = ()=>{

    mongoose.connect(process.env.DATABASE_URL,  {

        useNewUrlParser: true,
        useUnifiedTopology: true,


    
    })
    .then(()=>{
        console.log("db connecton is succceesful");
    })

    .catch((err)=>{
        console.err(err);
        console.log("db facing connection issue");
        process.exit(1);
    })
}

module.exports = connectwithdb;