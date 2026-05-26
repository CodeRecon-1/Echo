const mongoose = require("mongoose");

const threadSchema = new mongoose.Schema({
	title:String,
	content:String,
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref:"User"
		},
	solved: {
		type:Boolean,
		default:0
		},
	bookmarks: {
		type:Number,
		default:0
		},
	createdAt: {
		type:Date,
		default:Date.now
		}
});

module.exports = mongoose.model("Thread", threadSchema);
