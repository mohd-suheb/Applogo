//import 

const mongoose = require("mongoose");

const likeshcema = mongoose.Schema({

    post:{
        type: mongoose.Schema.Type.ObjectId,
        ref: "post" ,//ref to the post model
    },

    user:{
        type: String,
        required: true,

    },
});

module.exports = mongoose.model("like", likeshcema);