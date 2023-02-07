const cors = require("cors");
var express = require("express");
var app = express();
const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });
const connectDB = async () => {
	console.log(process.env.MONGO_URI);
	mongoose.set("strictQuery", false);
	try {
		await mongoose.connect(process.env.MONGO_URI, {});
		console.log("MongoDB connected...");
	} catch (err) {
		console.log(err);
	}
};
connectDB();

app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
	res.send("Hello World!");
});

app.use("/api", require("./routes/item.router"));

app.listen(3000, function () {
	console.log("Example app listening on port 3000!");
});
