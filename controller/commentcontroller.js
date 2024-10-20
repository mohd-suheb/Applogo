//import post and commnet
const post = require("../models/postmodel");
const Comments = require("../models/commentmodel");


exports.createcomment = async(req, res)=>{

    try{
       //fetch data from req body
       const { post, user, body } = req.body;
       //create comment
       const comment = new Comment({
        post, user, body
       });

       //insert database
       const savedcomment = await comment.Save();
       //find post by id, and add new comment to its comment array

       const updatedpost = await post.findByIdAndUpdate(post, {$push: {comment: savedcomment._id}}, {new: true})
                           .populate("comment")
                           .exec();

                           res.json({
                            post: updatedpost
                           });
    }
    catch(err){

        return res.status(500).json({
            err: "while creating the object",
        });


    }
}