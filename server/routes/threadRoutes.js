const express = require("express");
const router = express.Router();

const Thread = require("../models/Thread");

router.post("/create", async (req, res) => {

    const newThread = new Thread(req.body);

    await newThread.save();

    res.json(newThread);
});

router.get("/", async (req, res) => {

    const threads = await Thread.find()
        .sort({ createdAt: -1 });

    res.json(threads);
});

router.get("/:id", async (req, res) => {

    const thread = await Thread.findById(req.params.id);

    res.json(thread);
});

module.exports = router;
