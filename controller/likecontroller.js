

//import 
const post = require('../models/postmodels');
const Like = require('../models/likemodels');

exports.likepost = async(req, res)=>{

    try{

        //fethc data
        const{post, user} = req.body;
        //create object
        const like = new Like({
            post, user

        })
        //insert
        const savedliked = await like.Save();

        //updated post
        const updatedpost = await post.findByIdAndUpdate(post, {$push: {like:savedlike._id} }, {new:true});

        res.json({
            post: updatedpost,

        });

    }
    catch(err){

        return res.status(500).json({
            err: " while creating error"
        });

    }
}

exports.unlikepost = async(req, res)=>{

    try{

        const{post, like} = req.body;

        //find deleted like collection me se
        const deletedlike = await like.findOneAndDelete({post:post, _id:like});

        //updated the post collection
        const likeupdated = await post.findByIdAndDelete(post, {$pull:{like: deletelike._id}});

    }
    catch(err){

        return res.status(500).json({
            err: " while creataing the object",
        });

    }
}
