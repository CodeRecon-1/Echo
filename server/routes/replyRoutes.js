const express = require("express");

const router = express.Router();

const Reply = require("../models/Reply");

router.post("/create", async (req, res) => {

    const reply = new Reply(req.body);

    await reply.save();

    res.json(reply);
});

router.get("/:threadId", async (req, res) => {

    const replies = await Reply.find({
        threadId: req.params.threadId
    });

    res.json(replies);
});

module.exports = router;
