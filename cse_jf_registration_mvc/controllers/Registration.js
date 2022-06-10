const register = require("../models/register_data");
exports.GetAllRegister = function(req, res) {
    register.get_all(function(data) {
        res.send({ result: data });
    })
}

exports.getRegister = function(req, res) {
    register.getById(req.params.id, function(Data) {
        res.send({ result: data });
    })
}

exports.addRegister = function(req, res) {
    var newdata = req.body;
    register.add(newdata, function(response) {
        res.send({ result: response });
    })
}

exports.deleteRegister = function(req, res) {
    var id = req.params.id;
    register.remove(id, function(response) {
        res.send({ result: response });
    })
}