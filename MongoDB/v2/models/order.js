const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	price: Number,
	date: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model("order", OrderSchema);
