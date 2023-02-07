const router = require("express").Router();

const UserModel = require("../models/User.model");
// Require the User Schema
const User = require("../models/User.model");
router.post("/add", async (req, res) => {
	console.log(req.body);
	const { name, email, gender, status } = req.body;
	try {
		const newUser = {
			name,
			email,
			gender,
			status,
		};
		const user = await new User(newUser).save();
		res.json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json("Server Error !");
	}
});
router.get("/", async (req, res) => {
	console.log(req.body);
	const { name, email, gender, status } = req.body;
	try {
		const newUser = {
			name,
			email,
			gender,
			status,
		};
		const user = await new User(newUser).save();
		res.json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json("Server Error !");
	}
});

router.get("/", async (req, res) => {
	try {
		const listCommentaire = await UserModel.find(
			{}
		); /* .populate("candidat") */
		res.status(200).json({
			message: "list of Commentaire",
			data: listCommentaire,
		});
	} catch (error) {
		res.status(400).json({
			msg: "error" + error.message,
		});
	}
});

module.exports = router;
