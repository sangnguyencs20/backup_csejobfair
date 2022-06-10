const express = require("express");
const router = express.Router();

const approve = require("../controllers/Admin.js");
router.get("/all", approve.GetAllAdmin);
router.get("/byId/:id", approve.GetAdmin);
router.post("/add", approve.AddAdmin);
router.delete("/delete", approve.DelAdmin);
router.put("/update", approve.UpdateAdmin);

module.exports = router;