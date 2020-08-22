const express = require("express");
const mongo = require("mongoose");
const path = require("path");
const app = express();
const RouteBuilder = require("./utils/routeBuilder");
const { routesInit } = new RouteBuilder(
	app,
	path.join(__dirname, "/controllers"),
	"/api"
);

const PORT = 3001;
mongo.connect(
	"mongodb://localhost/demo",
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("Database has been connected!");
	}
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routesInit());

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});
