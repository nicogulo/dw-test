const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");

router.get("/", userController.view);
router.post("/", userController.find);
router.get("/addbooks", userController.form);
router.post("/addbooks", userController.create);

router.get("/addcategories", userController.form);
router.post("/addcategories", userController.create);

router.get("/editbooks/:id", userController.edit);
router.post("/editbooks/:id", userController.update);
router.get("/viewbooks/:id", userController.viewall);
router.get("/:id", userController.delete);

module.exports = router;
