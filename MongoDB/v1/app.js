const express = require("express");
const mongo = require("mongoose");
const app = express();
const routeInit = require("./routes");

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
routeInit(app);

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});
