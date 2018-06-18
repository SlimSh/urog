import mongoose from 'mongoose';

const info = new mongoose.Schema({
    title: {
        type: String,
        default: 'Header 1'
    },
    path: {
        type: String,
        default: '/some_path'
    },
    text: {
        type: String,
        default: ' many bookv'
    }
})

export default mongoose.model('Info', info);