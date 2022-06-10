const db = require('./connect')

const Business = function(business) {
    this.idbusiness = business.idbusiness
    this.name = business.name
    this.phone = business.phone
    this.email = business.email
    this.representation_name = business.representation_name
    this.password = business.password
}

Business.get_all = function(result) {
    db.query("SELECT * FROM `cse job fair registration`.business;", function(err, business) {
        if (err) {
            result(null)
        } else {
            result(business)
        }
    });
}
Business.getById = function(id, result) {
    db.query("SELECT * FROM `cse job fair registration`.business WHERE idbusiness = ?;", id, function(err, business) {
        console.log(business)
        if (err || business.length == 0) {
            result(null)
        } else {
            result(business)
        }
    });
}
Business.add = function(newdata, result) {
    db.query("INSERT INTO `cse job fair registration`.business SET ?", newdata, function(err, business) {
        if (err) {
            result(err, null);
            return;
        }
        result({ idbusiness: business.insertId, ...newdata });
        console.log("Number of records inserted: " + business.affectedRows)
    })
}
Business.remove = function(id, result) {
    db.query("DELETE FROM `cse job fair registration`.business WHERE idbusiness = ?;", id, function(err, business) {
        if (err) {
            result(null)
        } else {
            result("Xóa business có id: " + id + " thành công")
        }
    });
}
Business.update = function(update_data, result) {
    db.query("UPDATE `cse job fair registration`.business SET name=?,phone=?,email=?,representation_name=?,password=? WHERE idbusiness = ?;", [update_data.name, update_data.phone, update_data.email, update_data.representation_name, update_data.password, update_data.idbusiness], function(err, business) {
        if (err) {
            result(err, null);
            return;
        }
        result(update_data);
    })
}
Business.check_login = function ( data,result){
    db.query("SELECT * FROM `cse job fair registration`.business WHERE email = ? AND password = ? ;",[data.email,data.password],  function (err, business){
        
        
        if(err || business.length == 0){
            console.log("Một người dùng lạ đang cố gắn đăng nhập: `"+ data.email + "`   pass: `" + data.password + "`")
            result(null)
        }else {
            console.log(business[0].email + " đã đăng nhập");
            result(business[0])
        }
    });
}
  
module.exports = Business