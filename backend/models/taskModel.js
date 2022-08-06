const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    // handle connection between user & tasks
    //for every user has a tasks
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true, 
})

module.exports = mongoose.model('Task', taskSchema)