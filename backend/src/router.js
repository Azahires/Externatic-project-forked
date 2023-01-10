const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "../public/assets/uploads/" });

const router = express.Router();

const offerControllers = require("./controllers/offerControllers");
const userControllers = require("./controllers/userControllers");
const {
  validateUserCreation,
  validateUserModification,
} = require("./services/validator");
const {
  hashPassword,
  verifyPassword,
  verifyUser,
  verifyToken,
} = require("./services/authentification");

router.get("/offers", offerControllers.browse);
router.get("/offers/:id", offerControllers.read);
router.post("/offers", offerControllers.add);
router.put("/offers/:id", offerControllers.edit);
router.delete("/offers/:id", offerControllers.destroy);

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", validateUserCreation, hashPassword, userControllers.add);
router.put(
  "/users/:id",
  validateUserModification,
  upload.single("CV"),
  userControllers.edit
);
router.delete("/users/:id", userControllers.destroy);

router.post("/login", verifyUser, verifyPassword);
router.get("/account", verifyToken);
module.exports = router;
