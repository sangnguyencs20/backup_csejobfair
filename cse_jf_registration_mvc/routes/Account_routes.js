const express = require("express");
const router = express.Router()


const Business = require("../controllers/Business");

router.post("/login", Business.Login)
router.post("/add", Business.AddBusiness)
module.exports = router
