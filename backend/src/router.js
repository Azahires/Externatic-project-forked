const express = require("express");

const router = express.Router();

const offerControllers = require("./controllers/offerControllers");
const userControllers = require("./controllers/userControllers");
const validator = require("./services/validator");
const {
  hashPassword,
  verifyPassword,
  verifyUser,
  verifyToken,
} = require("./services/authentification");

router.get("/offers", offerControllers.browse);
router.get("/offers/:id", offerControllers.read);
router.put("/offers/:id", offerControllers.edit);
router.post("/offers", offerControllers.add);
router.delete("/offers/:id", offerControllers.destroy);

router.post(
  "/users",
  validator.validateUserCreation,
  hashPassword,
  userControllers.add
);
router.post("/login", verifyUser, verifyPassword);
router.get("/account", verifyToken);
module.exports = router;
