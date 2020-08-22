const fs = require("fs");
const path = require("path");

module.exports = (dir) => {
	let files = fs.readdirSync(dir);
	const result = [];
	files.forEach((file) => {
		result.push(file.substring(0, file.length - 3));
	});
	return result;
};
