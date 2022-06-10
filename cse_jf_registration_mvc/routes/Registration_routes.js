const express = require("express");
const router = express.Router();

const register = require("../controllers/Registration");
router.get("/all", register.GetAllRegister);
router.get("/byId/:id", register.getRegister);
router.post("/add", register.addRegister);

module.exports = router;