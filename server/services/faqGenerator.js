const Reply = require("../models/Reply");

async function generateFAQCandidate(thread) {

    const replies = await Reply.find({
        threadId: thread._id
    }).sort({ upvotes: -1 });

    const bestReply = replies[0];

    return {
        proposedQuestion: thread.title,
        proposedAnswer: bestReply
            ? bestReply.text
            : "No answer yet."
    };
}

module.exports = generateFAQCandidate;