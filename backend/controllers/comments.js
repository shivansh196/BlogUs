import Comments from '../models/Comments.js';

export const newComment = async (req, res) => {
    try {
        const newentry = req.body.comment;
        const comment = await new Comments({
            user_id: req.user.id,
            blog_id: req.params.id,
            comment: newentry
        });

        comment.save();

        res.status(200).json('Comment saved successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}


export const getComments = async (req, res) => {
    try {
        const comments = await Comments.find({blog_id: req.params.id});
        if(!comments){
            res.status(404).send({msg: "No comments have been linked to this blog."});
        }
        
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        await comment.delete()

        res.status(200).json('comment deleted successfully');
    } catch (error) {
        res.status(500).json(error)
    }
}
