const {
	addOrder,
	getAllOrders,
	getOrder,
	updateOrder,
	deleteOrder,
} = require("../services/order");

module.exports = [
	{
		method: "post",
		path: "/add",
		middleware: async (req, res) => {
			const data = req.body;
			try {
				const result = await addOrder(data);
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
				const result = await getAllOrders();
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
				const result = await getOrder(id);
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
				const result = await updateOrder(id, data);
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
				const result = await deleteOrder(id);
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
