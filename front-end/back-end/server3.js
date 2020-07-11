const express = require('express');
const app = express();
const axios = require('axios');
const mySQL = require('mysql');

const db_info = require('./constants');
const port = 3003;
// stablishing database information. info located in a different file
const db = mySQL.createConnection({
    host: db_info.host_db,
    user: db_info.user_db,
    password: db_info.password_db,
    database: db_info.database_db,
})
// connecting to database
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
app.use(express.json());


app.get('/', (req, res) => res.send("welcome to server 3"));
app.get('/list', (req, res) => {
    let sql = "select username, score from users ORDER BY score DESC";
    db.query(sql, (err, result) => {
        console.log(result)
        res.send(result);
    })
})

app.listen(port,()=> console.log(`server1 listening on port ${port}!`))