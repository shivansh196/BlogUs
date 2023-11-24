import Likes from '../models/Likes.js';

export const newLike = async (req, res) => {
    try {
        const like = await new Likes({
            user_id: req.user.id,
            blog_id: req.params.id
        });

        like.save();

        res.status(200).json('Like saved successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}


export const getLikes = async (req, res) => {
    try {
        const likes = await Likes.find({ blog_id: req.params.id });
        
        res.status(200).json(likes);
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteLike = async (req, res) => {
    try {
        const like = await Likes.findById(req.params.id);
        await like.delete()

        res.status(200).json('Post unliked successfully');
    } catch (error) {
        res.status(500).json(error)
    }
}
