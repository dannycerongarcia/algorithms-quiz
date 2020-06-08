// Server 1. This server will take care of the login and sign up.
// It shall accept reguistration request, and store the users information
// It shall accept login request. it will check if the data is in the database. then it send the results.
const express = require('express');
const app=express();
// this json to read objects from the frontend
app.use(express.json());
const port = process.env.PORT_NUMBER || 3001;

// mySQL database
const db_info = require('./constants');
const mySQL = require('mysql');
const db = mySQL.createConnection({
    host:db_info.host_db,
    user:db_info.user_db,
    password:db_info.password_db,
    database:db_info.database_db
});
db.connect((err,res)=>{
    if(err){
        console.log(err)
    }
    let sql = "use algorithmsQuiz";
    db.query(sql,function(err,results){
        if(err) throw err;
        console.log("database successfully connected");
    });
});

// might need to implement a middlewaer.
app.get('/',(req,res)=>res.send("welcome to server 1"));

app.post('/reguisterUser',(req,res)=>{
    

    res.send(JSON.stringify(true)) 
});

app.post('/loginUser',(req,res)=>{
    let LoginrResponse = false;
    
    // search database for matching username and password
    if(req.body.username==="dannyceron" && req.body.password==="123"){
        LoginrResponse=true;
    }
    res.send(JSON.stringify(LoginrResponse));
});

app.listen(port,()=>console.log(`server1 listening on port ${port}!`));