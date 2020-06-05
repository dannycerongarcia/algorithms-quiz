// Server 1. This server will take care of the login and sign up.
// It shall accept reguistration request, and store the users information
// It shall accept login request. it will check if the data is in the database. then it send the results.
const express = require('express');

const app=express();
const port = process.env.PORT_NUMBER || 80;

app.use(express.static('./Node'));

app.get('/',(req,res)=>res.send("welcome to server 1"));

app.listen(port,()=>console.log(`Example app listening on port ${port}!`));