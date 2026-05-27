const express = require("express");

const router = express.Router();
const Thread = require("../models/Thread");
const Reply = require("../models/Reply");

router.post("/create", async (req, res) => {

    const reply = new Reply(req.body);

    await reply.save();

    await Thread.findByIdAndUpdate(
        req.body.threadId,// how threadId is coming in body?
        {
            $inc: { replyCount: 1 }
        }
    );

    res.json(reply);
});

router.get("/:threadId", async (req, res) => {

    const replies = await Reply.find({
        threadId: req.params.threadId
    }).sort({ createdAt: -1 });

    res.json(replies);
});

module.exports = router;
