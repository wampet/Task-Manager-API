const mongoose = require('mongoose');
//A model is a wrapper for a shema in mongo

//Only the properties in the schema are taken in to create a document
//The rest is ignored
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters']
    },
    completed: {type: Boolean, default: false}
})

module.exports = mongoose.model('Task', TaskSchema)