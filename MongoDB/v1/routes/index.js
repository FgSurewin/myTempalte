const path = require("path");
const fileLoader = require("../utils/fileLoader");
const dir = path.join(__dirname, "/route");
const routes = fileLoader(dir);

module.exports = (app) => {
	routes.forEach((route) => {
		app.use(`/api/${route}`, require(`./route/${route}`));
	});
};
