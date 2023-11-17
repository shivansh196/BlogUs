import Comments from '../models/Comments.js';

const newComment = async (req, res) => {
    try {
        const com = req.body;
        const comment = await new Comments({
            user_id: req.user.id,
            blog_id: req.params.id,
            comment: com
        });

        comment.save();

        res.status(200).json('Comment saved successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}


const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({ blog_id: req.params.id });
        
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        await comment.delete()

        res.status(200).json('comment deleted successfully');
    } catch (error) {
        res.status(500).json(error)
    }
}

export default {
    newComment,
    getComments,
    deleteComment
};