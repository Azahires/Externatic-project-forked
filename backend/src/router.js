const express = require("express");

const router = express.Router();

const offerControllers = require("./controllers/offerControllers");

router.get("/offers", offerControllers.browse);
router.get("/offers/:id", offerControllers.read);
router.put("/offers/:id", offerControllers.edit);
router.post("/offers", offerControllers.add);
router.delete("/offers/:id", offerControllers.destroy);

const consultantControllers = require("./controllers/consultantControllers");

router.get("/team", consultantControllers.browse);
router.get("/team/:id", consultantControllers.read);
router.put("/team/:id", consultantControllers.edit);
router.post("/team", consultantControllers.add);
router.delete("/team/:id", consultantControllers.destroy);

module.exports = router;
