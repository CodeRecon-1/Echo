const mongoose = require("mongoose");

const replySchema = new mongoose.Schema({
    threadId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Thread"
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    text: String,

    upvotes: {
        type: Number,
        default: 0
    },

    acceptedAnswer: {
        type: Boolean,
        default: false
    },

    createdAt: {
        type:Date,
        default:Date.now()
    }

});

module.exports = mongoose.model("Reply", replySchema);
