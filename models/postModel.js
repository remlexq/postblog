const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
},
{
    timestamps: true
});




const postModel = mongoose.model('posts', postSchema);

module.exports = postModel;