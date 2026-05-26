function calculateFAQProbability(thread) {

    let score = 0;

    score += thread.replyCount * 0.4;

    score += thread.bookmarks * 0.6;

    if(thread.solved) {
        score += 10;
    }

    return score;
}

module.exports = calculateFAQProbability;


const score = calculateFAQProbability(thread);

if(score > 15) {
    // Send to FAQ Candidate Queue
}
