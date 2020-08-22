const Consumer = require("../models/consumer");

const addConsumer = (data) => {
	const newConsumer = new Consumer(data);
	return newConsumer.save();
};

const getAllConsumers = () => Consumer.find();

const getConsumer = (id) => Consumer.findOne({ _id: id });

const updateConsumer = (id, data) => Consumer.updateOne({ _id: id }, data);

const deleteConsumer = (id) => Consumer.deleteOne({ _id: id });

module.exports = {
	addConsumer,
	getAllConsumers,
	updateConsumer,
	getConsumer,
	deleteConsumer,
};
