const mongoose = require("mongoose");

const faqCandidateSchema = new mongoose.Schema({

    threadId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Thread"
    },

    proposedQuestion: String,

    proposedAnswer: String,

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
    }
});

module.exports = mongoose.model(
    "FAQCandidate",
    faqCandidateSchema
);
