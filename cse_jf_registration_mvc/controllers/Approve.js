const Approve = require("../models/approve");
exports.GetAllApprove = function(req, res) {
    Approve.get_all(function(data) {
        res.send({ result: data });
    })

};

exports.GetApprove = function(req, res) {
    Approve.getById(req.params.id, function(data) {
        res.send({ result: data });
    })
};

exports.AddApprove = function(req, res) {
    var newdata = req.body;
    Approve.add(newdata, function(response) {
        res.send({ result: response });
    })
}
exports.DelApprove = function(req, res) {
    var id = req.params.id;
    Approve.remove(id, function(response) {
        res.send({ result: response });
    })
}
exports.UpdateApprove = function(req, res) {
    var data_update = req.body;
    Approve.update(data_update, function(response) {
        res.send({ result: response });
    })
}