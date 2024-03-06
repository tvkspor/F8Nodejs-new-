const express = require("express");
const router = express.Router();

const coursesController = require("../app/controllers/CoursesController");

// newsControllers.index

router.get("/create", coursesController.create);
router.get("/:id/edit", coursesController.edit);
router.put("/:id", coursesController.update);
router.post("/handle-form-actions",coursesController.handleformAction)
router.patch("/:id/restore", coursesController.restore);
router.post("/store", coursesController.store);
router.delete("/:id", coursesController.delete);
router.delete("/:id/force", coursesController.forceDelete);
router.get("/:slug", coursesController.show);

module.exports = router;
