const mysql = require("mysql");

const mysqlconnection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'Nick@123',
    database:'exampractice',
    port:'3306'
});

mysqlconnection.connect((err) => {
    if(!err){
        console.log('connection succesfull with database');
    } else {
        console.log('Error in conection '+err);
    }
});

module.exports = mysqlconnection;