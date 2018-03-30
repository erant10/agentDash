const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgentSchema = new Schema({
    username: {
        type: String,
        required: [true, "A username must be provided."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "A password must be provided."],
    },
    email: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    }
});

const Agent = mongoose.model('agent', AgentSchema);

module.exports = Agent;