const Order = require("../models/order");

const addOrder = (data) => {
	const newOrder = new Order(data);
	return newOrder.save();
};

const getAllOrders = () => Order.find();

const getOrder = (id) => Order.findOne({ _id: id });

const updateOrder = (id, data) => Order.updateOne({ _id: id }, data);

const deleteOrder = (id) => Order.deleteOne({ _id: id });

module.exports = {
	addOrder,
	getAllOrders,
	updateOrder,
	getOrder,
	deleteOrder,
};
