import mongoose from 'mongoose';

const NewsSchema = mongoose.Schema({
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
    user: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
        default: 'General'
    },
    createdDate: {
        type: Date
    }
});

const news = mongoose.model('news', NewsSchema);

export default news;