const express = require("express");
const router = express.Router()
const homeController = require("../controllers/homeController");
const JWT = require("../_JWT")

router.get("/", homeController.home) 
router.get("/token",async function (req, res){
var user = {
    name:"Admin",
    email:"admin@example.com"
}
    const _token = await JWT.make(user)
    res.send({token: _token})
})
router.get("/check_token",async function (req, res){
   try {
    var _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJBZG1pbiIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20ifSwiaWF0IjoxNjU0NjE0NzMyLCJleHAiOjE2NTQ2MTgzMzJ9.gpPVHj2XPwrhLXuFJ8MzKusR45AhqMgvlsWwBjYYCKA"
    const data = await JWT.check(_token)
    res.send({data: data})
   }catch{
       res.send({data: "Mã token không hợp lệ"})
   }
})
    
module.exports = router 
