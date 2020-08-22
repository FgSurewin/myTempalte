const {
	addConsumer,
	getAllConsumers,
	getConsumer,
	updateConsumer,
	deleteConsumer,
} = require("../services/consumer");

module.exports = {
	add: async (req, res) => {
		const data = req.body;
		try {
			const result = await addConsumer(data);
			res.json(result);
		} catch (err) {
			res.send({
				error: true,
				message: err.message,
			});
		}
	},
	findAll: async (req, res) => {
		try {
			const result = await getAllConsumers();
			res.json(result);
		} catch (err) {
			res.send({
				error: true,
				message: err.message,
			});
		}
	},
	findOne: async (req, res) => {
		const id = req.params.id;
		try {
			const result = await getConsumer(id);
			res.json(result);
		} catch (err) {
			res.send({
				error: true,
				message: err.message,
			});
		}
	},
	update: async (req, res) => {
		const id = req.params.id;
		const data = req.body;
		try {
			const result = await updateConsumer(id, data);
			res.json(result);
		} catch (err) {
			res.send({
				error: true,
				message: err.message,
			});
		}
	},
	deleteOne: async (req, res) => {
		const id = req.params.id;
		try {
			const result = await deleteConsumer(id);
			res.json(result);
		} catch (err) {
			res.send({
				error: true,
				message: err.message,
			});
		}
	},
};
