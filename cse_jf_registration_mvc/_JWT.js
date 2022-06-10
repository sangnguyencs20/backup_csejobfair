const jwt = require('jsonwebtoken');
const _APP = require('./_APP')
// tạo token code 
let make = function (user) {
    return new Promise(function (resolve, reject) {
        jwt.sign({ data: user }, _APP.ACCESS_TOKEN, {
            algorithm: "HS256",
            expiresIn: _APP.TOKEN_TIME_LIFE
        },
            function (err, _token) {
                if (err) { return reject(err); }
                return resolve(_token);
            }
        )
    })
}
// xác thực token đúng , sai, hết hạn
let check = function(token) {
    return new Promise(function(resolve, reject) {
        jwt.verify(token, _APP.ACCESS_TOKEN, function(err,data){
            if (err) return reject(err);
            return resolve(data);
        })
    })
}

//export
module.exports = {
    make,check
}