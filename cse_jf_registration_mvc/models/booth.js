const db = require('./connect')

const booth = function(booth) {
    this.idbooth = booth.idbooth
    this.size = booth.size;
    this.price = booth.price;
    this.isBooked = booth.isBooked;
}

booth.get_all = function(result) {
    db.query("SELECT * FROM `cse job fair registration`.booth;", function(err, booth) {
        if (err) {
            result(null)
        } else {
            result(booth)
        }
    });
}
booth.getById = function(id, result) {
    db.query("SELECT * FROM `cse job fair registration`.booth WHERE idbooth = ?;", id, function(err, booth) {
        console.log(booth)
        if (err || booth.length == 0) {
            result(null)
        } else {
            result(booth)
        }
    });
}
booth.add = function(newdata, result) {
    db.query("INSERT INTO `cse job fair registration`.booth SET ?", newdata, function(err, booth) {
        if (err) {
            result(err, null);
            return;
        }
        result({ idbooth: booth.insertId, ...newdata });
        console.log("Number of records inserted: " + booth.affectedRows)
    })
}
booth.remove = function(id, result) {
    db.query("DELETE FROM `cse job fair registration`.booth WHERE idbooth = ?;", id, function(err, booth) {
        if (err) {
            result(null)
        } else {
            result("Xóa booth có id: " + id + " thành công")
        }
    });
}
booth.update = function(update_data, result) {
    db.query("UPDATE `cse job fair registration`.booth SET size=?,price=?,isBooked=? WHERE idbooth = ?;", [update_data.size, update_data.price, update_data.isBooked, upda], function(err, booth) {
        if (err) {
            result(err, null);
            return;
        }
        result(update_data);
    })
}
module.exports = booth