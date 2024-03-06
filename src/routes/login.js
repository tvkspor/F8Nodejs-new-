const express = require("express");
const router = express.Router();

const loginController = require("../app/controllers/LoginController");

// newsControllers.index

router.get("/", loginController.login);
router.post("/check", loginController.check);

module.exports = router;
