const mongoose = require("mongoose");

const faqCandidateSchema = new mongoose.Schema({

    threadId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Thread"
    },

    proposedQuestion: String,

    proposedAnswer: String,

    score: Number,

    upvotes: {
        type: Number,
        default: 0
    },

    downvotes: {
        type: Number,
        default: 0
    },

    status: {
        type: String,
        default: "DRAFT"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model(
    "FAQCandidate",
    faqCandidateSchema
);
