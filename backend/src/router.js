const express = require("express");
const multer = require("multer");

const router = express.Router();
const uploadCV = multer({ dest: "uploads/CV" });
const uploadavatar = multer({ dest: "uploads/avatar" });

// Controllers
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
const applicationControllers = require("./controllers/applicationControllers");
const favoriteControllers = require("./controllers/favoriteControllers");
const { renameAndMoveFile, moveFiles } = require("./services/filemanipulation");
const {
  sendApplicationMail,
  sendFavoriteMail,
} = require("./services/sendEmail");
const consultantControllers = require("./controllers/consultantControllers");

// Offers
router.get("/offers", offerControllers.browse);
router.get("/offers/:id", offerControllers.read);
router.post("/offers", offerControllers.add);
router.put("/offers/:id", offerControllers.edit);
router.delete("/offers/:id", offerControllers.destroy);

// Consultants
router.get("/team", consultantControllers.browse);
router.get("/team/:id", consultantControllers.read);
router.put("/team/:id", consultantControllers.edit);
router.post("/team", consultantControllers.add);
router.delete("/team/:id", consultantControllers.destroy);

// Users
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

// Application
router.get("/applications", applicationControllers.browse);
router.post("/applications", applicationControllers.add);

// Favorites
router.get("/favorites", favoriteControllers.browse);
router.post("/favorites", favoriteControllers.add);
router.post("/deletefavorites", favoriteControllers.destroy);

// Account & login
router.post("/login", verifyUser, verifyPassword, moveFiles);
router.get("/account", verifyToken);

// Mailing
router.post("/mailing", sendApplicationMail);
router.post("/mailingfavorite", sendFavoriteMail);
module.exports = router;
