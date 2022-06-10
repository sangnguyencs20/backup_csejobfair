const db = require('./connect')

const admin = function(admin) {
    this.idadmin = admin.idadmin;
    this.phone = admin.admin;
    this.name = admin.name;
    this.email = admin.email;
    this.password = admin.password;
}

admin.get_all = function(result) {
    db.query("SELECT * FROM `cse job fair registration`.admin;", function(err, admin) {
        if (err) {
            result(null)
        } else {
            result(admin)
        }
    });
}
admin.getById = function(id, result) {
    db.query("SELECT * FROM `cse job fair registration`.admin WHERE idadmin = ?;", id, function(err, admin) {
        console.log(admin)
        if (err || admin.length == 0) {
            result(null)
        } else {
            result(admin)
        }
    });
}
admin.add = function(newdata, result) {
    db.query("INSERT INTO `cse job fair registration`.admin SET ?", newdata, function(err, admin) {
        if (err) {
            result(err, null);
            return;
        }
        result({ idadmin: admin.insertId, ...newdata });
        console.log("Number of records inserted: " + admin.affectedRows)
    })
}
admin.remove = function(id, result) {
    db.query("DELETE FROM `cse job fair registration`.admin WHERE idadmin = ?;", id, function(err, admin) {
        if (err) {
            result(null)
        } else {
            result("Xóa admin có id: " + id + " thành công")
        }
    });
}
admin.update = function(update_data, result) {
    db.query("UPDATE `cse job fair registration`.admin SET phone=?,name=?,email=?,password=? WHERE idadmin = ?;", [update_data.phone, update_data.name, update_data.email, update_data.password], function(err, admin) {
        if (err) {
            result(err, null);
            return;
        }
        result(update_data);
    })
}
module.exports = admin