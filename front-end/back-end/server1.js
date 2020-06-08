// Server 1. This server will take care of the login and sign up.
// It shall accept reguistration request, and store the users information
// It shall accept login request. it will check if the data is in the database. then it send the results.
const express = require('express');
const app = express();
// this json to read objects from the frontend
app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const port = process.env.PORT_NUMBER || 3001;
var md5 = require('md5');
// mySQL database
const db_info = require('./constants');
const mySQL = require('mysql');
const db = mySQL.createConnection({
    host: db_info.host_db,
    user: db_info.user_db,
    password: db_info.password_db,
    database: db_info.database_db
});
db.connect((err, res) => {
    if (err) {
        console.log(err)
    }
    let sql = "use algorithmsQuiz";
    db.query(sql, function (err, results) {
        if (err) throw err;
        console.log("database successfully connected");
    });
});


// might need to implement a middlewaer.
app.get('/', (req, res) => res.send("welcome to server 1"));

app.post('/reguisterUser', (req, res) => {
    // datebase creates using:
    // CREATE TABLE users(username VARCHAR(10), email VARCHAR(15), password VARCHAR(10) ,score INTEGER, PRIMARY KEY(username));
    let sql = "INSERT INTO users (username, email, password, score)"
        + "VALUES('" + req.body.username + "','" + req.body.email + "','" + req.body.password + "',0)";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("user added to database");
        res.send(JSON.stringify(true));
    });

});

app.post('/loginUser', (req, res) => {
    let sql = "SELECT password FROM users" +
        " WHERE username = '" + req.body.username + "'";
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        if (result != '') {
            if (req.body.password === result[0].password) {
                response = true;
                res.send(true);
            }
        }
        if (result === '') return res.send(false);
    });
});

app.post('/score', (req, res) => {
    if (req.body.answer === 'H') {
        console.log("correct answer")
        const username = req.cookies.username;
        const password = req.cookies.password;
        let sql = "SELECT password,score FROM users" +
            " WHERE username = '" + username + "'";
        db.query(sql, (err, result) => {
            if (err) console.log(err);
            if (result != '') {
                if (password === md5(result[0].password)) {
                    let tempscore = parseInt(req.body.score) + parseInt(result[0].score)
                    let sqlTwo = "UPDATE users " +
                        "SET score = " + tempscore
                        + " WHERE username =  '" + username + "'";
                    db.query(sqlTwo, (err, result) => {

                        if (err) console.log(err);
                    });
                    
                }
            }
        });
        return res.send(true);
    }
    res.send(false);
});

app.listen(port, () => console.log(`server1 listening on port ${port}!`));