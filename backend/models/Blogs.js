import mongoose from 'mongoose';

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    video: {
        type: String,
        require: false
    },
    user: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
        default: 'General'   
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

const blog = mongoose.model('blog', BlogSchema);

export default blog;