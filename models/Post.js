const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: Date.now
    }
})

// below is a model what it param is: the first one is the name and the 2nd is the schema to use
module.exports = mongoose.model('Posts', PostSchema)