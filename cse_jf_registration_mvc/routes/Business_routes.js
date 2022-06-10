const express = require("express");
const router = express.Router()

const Middleware = require("../controllers/_AuthMiddleWare_controller")
const Business = require("../controllers/Business");

router.get('/', function(req, res) {
    res.send("Business")
});
router.get("/all", Business.GetAllBusiness);
router.get("/byId/:id", Middleware.verifyUser_and_Admin ,Business.GetBusiness);
router.post("/add", Business.AddBusiness);
router.delete("/del/:id",Middleware.verifyUser_and_Admin ,Business.DelBusiness);
router.put("/update", Business.UpdateBusiness);

module.exports = router

