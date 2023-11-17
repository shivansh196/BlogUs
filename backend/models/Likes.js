import mongoose from 'mongoose';

const LikeSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user_id',
        required: true
    },
    blog_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blog_id'
    },
    likedDate: {
        type: Date,
        default: Date.now
    }
});

const like = mongoose.model('like', LikeSchema);

export default like;