var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost', // Replace with your host name
    user: 'root', // Replace with your database username
    password: '123456789', // Replace with your database password
    database: 'cse job fair registration' // // Replace with your database Name
});
db.connect(function(err) {
    if (err) {
        console.log("Kết nối CSDL không thành công")
    } else console.log("Kết nối CSDL thành công")
});

module.exports = db;