const express = require("express");

const router = express.Router();

const FAQ = require("../models/FAQ");

router.get("/", async (req, res) => {

    const faqs = await FAQ.find()
        .sort({ createdAt: -1 });

    res.json(faqs);
});

module.exports = router;