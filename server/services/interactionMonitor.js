function calculateFAQScore(thread) {

    let score = 0;

    // More replies = more discussion depth
    score += thread.replyCount * 0.4;

    // Bookmarks indicate useful information
    score += thread.bookmarks * 0.6;

    // Solved discussions are valuable
    if (thread.solved) {
        score += 10;
    }

    // More participants = broader validation
    score += thread.participantCount * 0.5;

    return score;
}

module.exports = calculateFAQScore;










// function calculateFAQProbability(thread) {

//     let score = 0;

//     score += thread.replyCount * 0.4;

//     score += thread.bookmarks * 0.6;

//     if(thread.solved) {
//         score += 10;
//     }

//     return score;
// }

// module.exports = calculateFAQProbability;


// const score = calculateFAQProbability(thread);

// if(score > 15) {
//     // Send to FAQ Candidate Queue
// }
