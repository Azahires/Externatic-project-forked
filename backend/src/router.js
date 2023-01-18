const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

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

router.get("/offers", offerControllers.browse);
router.get("/offers/:id", offerControllers.read);
router.post("/offers", offerControllers.add);
router.put("/offers/:id", offerControllers.edit);
router.delete("/offers/:id", offerControllers.destroy);

const consultantControllers = require("./controllers/consultantControllers");

router.get("/team", consultantControllers.browse);
router.get("/team/:id", consultantControllers.read);
router.put("/team/:id", consultantControllers.edit);
router.post("/team", consultantControllers.add);
router.delete("/team/:id", consultantControllers.destroy);

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", validateUserCreation, hashPassword, userControllers.add);
router.post("/avatar", uploadavatar.single("avatar"), (req, res) => {
  const { originalname, filename } = req.file;
  const newname = `${uuidv4()}-${originalname}`;
  fs.rename(
    `uploads/avatar/${filename}`,
    `uploads/avatar/${newname}`,
    (err) => {
      if (err) throw err;
      res.send(newname);
    }
  );
});
router.post("/cv", uploadCV.single("CV"), (req, res) => {
  const { originalname, filename } = req.file;
  const newname = `${uuidv4()}-${originalname}`;
  fs.rename(`uploads/CV/${filename}`, `uploads/CV/${newname}`, (err) => {
    if (err) throw err;
    res.send(newname);
  });
});
router.put("/users/:id", validateUserModification, userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

router.post("/login", verifyUser, verifyPassword);
router.get("/account", verifyToken);
module.exports = router;
