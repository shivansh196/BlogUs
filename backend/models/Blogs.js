import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
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
    categories: {
        type: Array,
        default: 'General'   
    }
},{timestamps: true});

const blog = mongoose.model('blog', BlogSchema);

export default blog;