const express = require("express");
const route = express.Router();
const {
	add,
	findAll,
	update,
	findOne,
	deleteOne,
} = require("../../controllers/consumer");

route.post("/add", add);

route.get("/findAll", findAll);

route.get("/findOne/:id", findOne);

route.put("/update/:id", update);

route.delete("/deleteOne/:id", deleteOne);

module.exports = route;
