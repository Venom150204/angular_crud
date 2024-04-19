const express = require("express");
const router = express.Router();
const {
  greet,
  showPlayer,
  showbyIDPlayer,
  addPlayer,
  updatePlayer,
  deletePlayer,
} = require("../controller/emp.controller");

router.get("/", greet);
router.get("/show", showPlayer);
router.get("/showbyID", showbyIDPlayer);
router.post("/add", addPlayer);
router.put("/update/:id", updatePlayer);
router.delete("/delete/:id", deletePlayer);

module.exports = router;
