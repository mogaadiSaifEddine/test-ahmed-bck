const User = require("../models/User.model");

const save = async (req, res) => {
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
};
const getAll = async (req, res) => {
	console.log("ee");
	try {
		console.log("here");
		const listCommentaire = await User.find({});
		res.status(200).json(listCommentaire);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			msg: "error" + error.message,
		});
	}
};

module.exports = { save, getAll };
