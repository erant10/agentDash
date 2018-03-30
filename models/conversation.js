const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    text: String,
    meta: [
        {
            sender: mongoose.Schema.Types.ObjectId,
            isAgent: Boolean,
            date: Date
        }
    ]
});

var ConversationSchema = new Schema({
    date: Date,
    messages : [messageSchema],
    participants : [
        {
            agent : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Agent'
            },
            clients: [{
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Client'
            }],
        }
    ]
});

const Conversation = mongoose.model('conversation', ConversationSchema);

module.exports = Conversation;