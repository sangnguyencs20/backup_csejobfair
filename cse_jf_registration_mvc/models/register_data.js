const db = require('./connect')

const register = function(register) {
    this.idregister = register.idregister;
    this.time_register = register.time_register;
    this.register_idregister = register.register_idregister;
    this.booth_idbooth = register.booth_idbooth;
}

register.get_all = function(result) {
    db.query("SELECT * FROM `cse job fair registration`.register;", function(err, register) {
        if (err) {
            result(null)
        } else {
            result(register)
        }
    });
}
register.getById = function(id, result) {
    db.query("SELECT * FROM `cse job fair registration`.register WHERE idregister = ?;", id, function(err, register) {
        console.log(register)
        if (err || register.length == 0) {
            result(null)
        } else {
            result(register)
        }
    });
}
register.add = function(newdata, result) {
    db.query("INSERT INTO `cse job fair registration`.register  SET ?", newdata, function(err, register) {
        if (err) {
            result(err, null);
            return;
        }
        result({ idregister: register.insertId, ...newdata });
        console.log("Number of records inserted: " + register.affectedRows)
    })
}
register.remove = function(id, result) {
    db.query("DELETE FROM `cse job fair registration`.register WHERE idregister = ?;", id, function(err, register) {
        if (err) {
            result(null)
        } else {
            result("Xóa register có id: " + id + " thành công")
        }
    });
}
module.exports = register