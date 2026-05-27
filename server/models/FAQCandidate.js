const mongoose = require("mongoose");

const editSchema = new mongoose.Schema({
    userId: String,

    field: String,

    newText: String,

    votes: {
        type: Number,
        default: 0
    }
});

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

    communityEdits: [editSchema],

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