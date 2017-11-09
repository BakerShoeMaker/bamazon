console.log("hello world!");
const mysql = require('mysql');
const inquirer = require('inquirer');

//const $ = require('jQuery');

var itemSelected = "";
var quantitySelected = "";

//------------ NODE [ENTER] -----------------------
const connection = mysql.createConnection({
    host: "localHost",
    port: 3306,
    user:"root",
    password:"",
    database: "bamazon_db"
});

//Ask question
//Capture user data.
//Data is compared in the database
//Results are shown.

connection.connect(function(err){

    if(err) throw err;
    console.log("Connection working! Connected as id: " + connection.threadId + "\n");
    start();
});

function start(){

    inquirer.prompt([
        {
            name: "item",
            message:"What would you like to purchase?"
        },
        {
            name: "quantity",
            message: "How many would you like to buy?"
        }

        ]).then(function(answer){

        //put answer into variable
        itemSelected = answer.item;
        quantitySelected = answer.quantity;

        console.log("You are purchasing the: ", itemSelected);
        console.log("You purchasing: " +quantitySelected +" items.");
        runQuery();

    })
};


function runQuery(){
    console.log("Query is running!");

    connection.query('SELECT * FROM products', function(err, rows, fields)
     {
     if (err) throw err;
     console.log(rows[0]);
     console.log(rows[0].item_id);
     console.log(rows[0].product_name);
     console.log(rows.length);

         //Search each row.
      for(var i = 0; i < rows.length; i++) {
          //console.log("Row" +i  +": " +rows[i]);
          //console.log(rows[i].product_name);
          //console.log(rows[i].stock_quantity);
          var productName =  rows[i].product_name;
            if(productName == itemSelected){
                console.log("We have a match!");
                //decrease the quantity from the
                decreaseInventory();
            }

        }

     });//end of connection


}

function decreaseInventory(){

    console.log("We now will decrease the inventory!!!");

}


//------------ NODE [STOP] -----------------------


//*****************************************************************
//*****************************************************************

//------------ FOR WEB PAGE [START] -----------------------

//display data in a table
function fillTableData(){


}
//------------ FOR WEB PAGE [STOP] -----------------------
//User selects data on the page.


