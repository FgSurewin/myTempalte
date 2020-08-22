const {
	addConsumer,
	getAllConsumers,
	getConsumer,
	updateConsumer,
	deleteConsumer,
} = require("../services/consumer");

module.exports = [
	{
		method: "post",
		path: "/add",
		middleware: async (req, res) => {
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
	},
	{
		method: "get",
		path: "/findAll",
		middleware: async (req, res) => {
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
	},
	{
		method: "get",
		path: "/findOne/:id",
		middleware: async (req, res) => {
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
	},
	{
		method: "put",
		path: "/update/:id",
		middleware: async (req, res) => {
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
	},
	{
		method: "delete",
		path: "/delete/:id",
		middleware: async (req, res) => {
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
	},
];
