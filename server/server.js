const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const threadRoutes = require("./routes/threadRoutes");
const replyRoutes = require("./routes/replyRoutes");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/threads", threadRoutes);
app.use("/api/replies", replyRoutes);



mongoose.connect("mongodb://127.0.0.1:27017/projectecho")
.then(() => console.log("MongoDB Connected"));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
