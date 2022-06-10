const Business = require("../models/Business_data");

var JWT = require("../_JWT")
exports.GetAllBusiness = function (req, res ) { 
  Business.get_all(function (data){
      res.send({result: data});
  })
};

exports.GetBusiness = function(req, res) {
    Business.getById(req.params.id, function(data) {
        res.send({ result: data });
    })
};

exports.AddBusiness = function(req, res) {
    var newdata = req.body;
    Business.add(newdata, function(response) {
        res.send({ result: response });
    })
}
exports.DelBusiness = function(req, res) {
    var id = req.params.id;
    Business.remove(id, function(response) {
        res.send({ result: response });
    })
}
exports.UpdateBusiness = function(req, res) {

  var data_update = req.body;
  Business.update(data_update , function(response){
    res.send({result: response});
  })
}
exports.Login = async function(req, res) {
  var data = req.body;
  Business.check_login(data ,async function(response){
    if(response){
      const _token = await JWT.make(response)
      res.send({result: _token})
      return; 
    }
    res.send({result: response});
  })
}