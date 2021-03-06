console.log("hello world!");
const mysql = require('mysql');
const inquirer = require('inquirer');


var itemSelected = "";
var quantitySelected = "";
var quantityInDatabase;
var productName = "";

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
          productName =  rows[i].product_name;
          quantityInDatabase = rows[i].stock_quantity;

            if(productName == itemSelected){
                console.log("We have matched the product requested!");
                //if quantity is not available show message.
                if( quantitySelected > quantityInDatabase){
                    console.log("We can't fulfill your order. Not enough product in stock.");
                }
                else{
                    //decrease the quantity from the
                    console.log("Your order has been sent! Thanks for shopping at Bamazon!")
                    decreaseInventory();
                }

            }

        }

     });//end of connection


}

function decreaseInventory(){

    connection.query(
    // "UPDATE products SET stock_quantity = stock_quantity - "+quantitySelected +" WHERE product_name = '" + itemSelected,
        `UPDATE products SET stock_quantity = stock_quantity - ${quantitySelected} WHERE product_name = "${itemSelected}"`,

        function(err, rows, fields){

            if (err) console.log(err)
            console.log("Product ordered: ", itemSelected);
            console.log("Quantity: " ,quantitySelected);

        });

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


