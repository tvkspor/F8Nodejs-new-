const express = require("express");
const router = express.Router();

const signupController = require("../app/controllers/SignUpController");

// newsControllers.index

router.get("/", signupController.signUp);
router.post("/store", signupController.store);


module.exports = router;
