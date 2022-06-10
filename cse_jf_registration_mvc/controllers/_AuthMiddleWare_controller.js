let isAuth = async function(req, res , next){
    var _JWT = require("../_JWT")
    var _token = req.headers.authorization
    if(_token){
        try{
            var authData = await _JWT.check(_token)
            req.auth = authData;
            next()
        }catch(err){
            res.send({data: "Mã token không hợp lệ"})
        }
    }else {
        res.send({data: "Bạn chưa có mã token"})
    }
    console.log(req.auth.data[0].idbusiness)
}
let verifyUser_and_Admin = async function(req, res ,next){
    isAuth(req , res , () => {
        if(req.auth.data[0].idbusiness == req.params.id) next();
        else res.send("Không thể xóa hoặc thay đổi thông tin của người khác nếu bạn không phải Admin")
    })
}
module.exports = {
    isAuth,verifyUser_and_Admin
}