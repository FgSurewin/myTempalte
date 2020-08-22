const mongoose = require("mongoose");

const ConsumerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	age: Number,
});

module.exports = mongoose.model("consumer", ConsumerSchema);
