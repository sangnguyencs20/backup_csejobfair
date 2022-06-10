const express = require("express");
const router = express.Router();

const approve = require("../controllers/Approve.js");
router.get("/all", approve.GetAllApprove);
router.get("/byId/:id", approve.GetApprove);
router.post("/add", approve.AddApprove);
router.delete("/delete", approve.DelApprove);
router.put("/update", approve.UpdateApprove);

module.exports = router;