import mongoose from 'mongoose';

const CommentSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user_id',
        required: true
    },
    blog_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blog_id'
    },
    comment:{
        type: String,
        required: true
    },
    commentDate: {
        type: Date,
        default: Date.now
    }
});

const comment = mongoose.model('comment', CommentSchema);

export default comment;