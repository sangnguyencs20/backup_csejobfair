const Admin = require("../models/admin");
exports.GetAllAdmin = function(req, res) {
    Admin.get_all(function(data) {
        res.send({ result: data });
    })

};

exports.GetAdmin = function(req, res) {
    Admin.getById(req.params.id, function(data) {
        res.send({ result: data });
    })
};

exports.AddAdmin = function(req, res) {
    var newdata = req.body;
    Admin.add(newdata, function(response) {
        res.send({ result: response });
    })
}
exports.DelAdmin = function(req, res) {
    var id = req.params.id;
    Admin.remove(id, function(response) {
        res.send({ result: response });
    })
}
exports.UpdateAdmin = function(req, res) {
    var data_update = req.body;
    Admin.update(data_update, function(response) {
        res.send({ result: response });
    })
}