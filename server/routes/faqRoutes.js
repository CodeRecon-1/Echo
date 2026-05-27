const express = require("express");
const router = express.Router();

const FAQCandidate = require("../models/FAQCandidate");

router.get("/", async(req,res) => {
    const faqs = await FAQCandidate.find()
        .sort({createdAt: -1});
    res.json(faqs);
});

router.post("/vote/:id", async (req, res) => {

    const { type } = req.body;

    const faq =
        await FAQCandidate.findById(req.params.id);

    if (type === "UP") {
        faq.upvotes += 1;
    }

    if (type === "DOWN") {
        faq.downvotes += 1;
    }

    // Promotion Logic
    if (
        faq.upvotes - faq.downvotes >= 5
    ) {
        faq.status = "VALIDATED";
    }

    await faq.save();

    res.json(faq);
});

router.post("/edit/:id", async (req, res) => {

    const {
        userId,
        field,
        newText
    } = req.body;

    const faq =
        await FAQCandidate.findById(req.params.id);

    faq.communityEdits.push({
        userId,
        field,
        newText
    });

    await faq.save();

    res.json(faq);
});

module.exports = router;