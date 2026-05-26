const express = require("express");

const router = express.Router();

const Thread = require("../models/Thread");

const FAQCandidate = require("../models/FAQCandidate");

const calculateFAQScore = require(
    "../services/interactionMonitor"
);

const generateFAQCandidate = require(
    "../services/faqGenerator"
);

router.post("/scan", async (req, res) => {

    const threads = await Thread.find();

    let created = [];

    for (const thread of threads) {

        const score = calculateFAQScore(thread);

        if (score >= 10) {

            const existing = await FAQCandidate.findOne({
                threadId: thread._id
            });

            if (!existing) {

                const generated =
                    await generateFAQCandidate(thread);

                const faq = new FAQCandidate({
                    threadId: thread._id,
                    proposedQuestion:
                        generated.proposedQuestion,
                    proposedAnswer:
                        generated.proposedAnswer,
                    score
                });

                await faq.save();

                created.push(faq);
            }
        }
    }

    res.json(created);
});

module.exports = router;