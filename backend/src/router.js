const express = require("express");
const multer = require("multer");

const router = express.Router();
const uploadCV = multer({ dest: "uploads/CV" });
const uploadavatar = multer({ dest: "uploads/avatar" });

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
const { renameAndMoveFile, moveFiles } = require("./services/filemanipulation");

router.get("/offers", offerControllers.browse);
router.get("/offers/:id", offerControllers.read);
router.post("/offers", offerControllers.add);
router.put("/offers/:id", offerControllers.edit);
router.delete("/offers/:id", offerControllers.destroy);

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", validateUserCreation, hashPassword, userControllers.add);
router.put(
  "/avatar/:id",
  uploadavatar.single("avatar"),
  renameAndMoveFile,
  userControllers.editFile
);
router.put(
  "/cv/:id",
  uploadCV.single("CV"),
  renameAndMoveFile,
  userControllers.editFile
);
router.put("/users/:id", validateUserModification, userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

router.post("/login", verifyUser, verifyPassword, moveFiles);
router.get("/account", verifyToken);
module.exports = router;
