//import

const post = require('./models/postmodels');

exports.createpost = async(req, res)=>{

    try {

        //fetch data from req body
        const {tittle, body} = req.body;


        const post = new post({

            tittle, body,
        });

        const savedpost = await post.save();

        res.json({
            post: savedpost,
        });
        
    } catch (error) {
        return res.status(400).json({
             error: "error while creating the object",
        });
        
    }
}

exports.getAllpost = async(req, res)=>{

    try{

        const post = await post.find().populate("comment").populate("like").exec();

        res.json({
            post,
        });

    }
    catch(err){
        return res.status(400).json({
            error: "error while creating the object",
       });
    }
}