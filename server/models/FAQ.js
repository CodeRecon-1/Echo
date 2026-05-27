const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({

    question: String,

    answer: String,

    sourceThread: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Thread"
    },

    aliases: [String],//sentences having different owrding but same
    // same intent.

    createdFrom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FAQCandidate"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model(
    "FAQ",
    faqSchema
);