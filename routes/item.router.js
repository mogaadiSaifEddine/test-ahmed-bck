const router = require("express").Router();

const UserModel = require("../models/User.model");
// Require the User Schema
const User = require("../models/User.model");
const controller = require("../controllers/item.controller");
// add to fav
router.post("/add", controller.save);
//  get list
router.get("/", controller.getAll);

module.exports = router;
