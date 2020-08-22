const fs = require("fs");
const express = require("express");

class RouteBuilder {
	/**
	 *
	 * @param {*} app The app of Express of Koa
	 * @param {String} dir  The path of controller directory
	 * @param {String} prefix The prefix of API, such as "http://localhost:3000/prefix/..."
	 */
	constructor(app, dir, prefix) {
		this.$app = app;
		this.$dir = dir;
		this.$prefix = prefix;
		this.$controllers = this.fetchController(dir);
		this.$routes = [];
	}

	fetchController(dir) {
		let files = fs.readdirSync(dir);
		const result = [];
		files.forEach((file) => {
			result.push(file.substring(0, file.length - 3));
		});
		return result;
	}

	singleRouteInit(route) {
		const currentRoute = express.Router();
		route.forEach((item) => {
			currentRoute[item.method](item.path, item.middleware);
		});
		this.$routes.push(currentRoute);
	}

	parseController() {
		this.$controllers.forEach((controller) => {
			this.singleRouteInit(require(`${this.$dir}/${controller}`));
		});
	}

	routesInit = () => {
		this.parseController();
		for (let i in this.$controllers) {
			this.$app.use(`${this.$prefix}/${this.$controllers[i]}`, this.$routes[i]);
			console.log(`👿 Build route: ${this.$prefix}/${this.$controllers[i]}`);
		}
		return (req, res) => {
			req.next();
		};
	};
}

module.exports = RouteBuilder;
