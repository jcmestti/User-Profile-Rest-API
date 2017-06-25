const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

var imageSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    },
    url: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Image', imageSchema);