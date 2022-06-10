const db = require('./connect')

const approve = function(approve) {
    this.time_approve = approve.time_approve;
    this.approve = approve.approve;
    this.register_idregister = approve.register_idregister;
    this.idadmin = this.idadmin;

}

approve.get_all = function(result) {
    db.query("SELECT * FROM `cse job fair registration`.approve;", function(err, approve) {
        if (err) {
            result(null)
        } else {
            result(approve)
        }
    });
}
approve.getById = function(id, result) {
    db.query("SELECT * FROM `cse job fair registration`.approve WHERE register_idregister = ?;", id, function(err, approve) {
        console.log(approve)
        if (err || approve.length == 0) {
            result(null)
        } else {
            result(approve)
        }
    });
}
approve.add = function(newdata, result) {
    db.query("INSERT INTO `cse job fair registration`.approve SET ?", newdata, function(err, approve) {
        if (err) {
            result(err, null);
            return;
        }
        result({ idapprove: approve.insertId, ...newdata });
        console.log("Number of records inserted: " + approve.affectedRows)
    })
}
approve.remove = function(id, result) {
    db.query("DELETE FROM `cse job fair registration`.approve WHERE register_idregister = ?;", id, function(err, approve) {
        if (err) {
            result(null)
        } else {
            result("Xóa approve có id: " + id + " thành công")
        }
    });
}
approve.update = function(update_data, result) {
    db.query("UPDATE `cse job fair registration`.approve SET time_approve=?,approve=?,admin_idadmin=? WHERE register_idregister = ?;", [update_data.time_approve, update_data.approve, update_data.register_idregister, update_data.admin_idadmin], function(err, approve) {
        if (err) {
            result(err, null);
            return;
        }
        result(update_data);
    })
}
module.exports = approve