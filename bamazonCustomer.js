const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localHost",
    port: 3306,
    user:"root",
    password:"",
    database: "bamazon_db"
});

connection.connect(function(err){

    if(err) throw err;
    console.log("Connection working! Connected as id: " + connection.threadId + "\n");
});


//display data in a table

//User selects data on the page.

//Data is compared in the database

//Results are shown.