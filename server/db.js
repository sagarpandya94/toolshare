const mysql = require ('mysql');

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
})

con.connect(function(err){
    console.log("In connect");
    if(err) throw err;
    console.log("Connected !!")
});

