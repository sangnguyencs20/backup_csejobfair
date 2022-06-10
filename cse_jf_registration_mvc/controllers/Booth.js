const Booth = require("../models/Booth");
exports.GetAllBooth = function(req, res) {
    Booth.get_all(function(data) {
        res.send({ result: data });
    })

};

exports.GetBooth = function(req, res) {
    Booth.getById(req.params.id, function(data) {
        res.send({ result: data });
    })
};

exports.AddBooth = function(req, res) {
    var newdata = req.body;
    Booth.add(newdata, function(response) {
        res.send({ result: response });
    })
}
exports.DelBooth = function(req, res) {
    var id = req.params.id;
    Booth.remove(id, function(response) {
        res.send({ result: response });
    })
}
exports.UpdateBooth = function(req, res) {
    var data_update = req.body;
    Booth.update(data_update, function(response) {
        res.send({ result: response });
    })
}