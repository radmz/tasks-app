const { Schema, model } = require('mongoose');

const props = { 
    type: String,
    min: 4,
    max: 100,
    required: true
}

const schema = new Schema({
    description: props,
    createdAt: { type: Date, default: new Date()},
    task: props
},{
    versionKey: false
})

module.exports = model('Task', schema);