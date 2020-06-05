const express = require('express');
const httpProxy = require('http-proxy');
const app = express();
const port = process.env.PORT || 3004;

apiProxy.on('error',(err,req,res)=>{
    console.log(err);
    res.status(500).send('Proxy Error');
});

app.all("");