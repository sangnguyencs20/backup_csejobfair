const express = require("express");
const router = express.Router();

const booth = require("../controllers/Booth.js");
router.get("/all", booth.GetAllBooth);
router.get("/byId/:id", booth.GetBooth);
router.post("/add", booth.AddBooth);
router.delete("/delete", booth.DelBooth);
router.put("/update", booth.UpdateBooth);

module.exports = router;