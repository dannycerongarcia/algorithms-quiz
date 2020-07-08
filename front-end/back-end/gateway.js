const express = require('express');
const httpProxy = require('http-proxy');
const app = express();
const port = process.env.PORT || 3004;

const apiProxy = httpProxy.createProxyServer();
// servers
const server1 = "http://localhost:3001";
const server2 = "http://localhost:3002";

apiProxy.on('error',(err,req,res)=>{
    console.log(err);
    res.status(500).send('Proxy Error');
});

app.all("/server1/*",(req,res)=>{
    apiProxy.web(req,res,{
        target:server1,
    });
});

app.all("/loginUser*",(req,res)=>{
    apiProxy.web( req, res, {
        target:server1,
    });
});

app.all("/reguisterUser*",(req,res)=>{
    apiProxy.web(req,res,{
        target:server1,
    });
});

app.all("/score*",(req,res)=>{
    apiProxy.web(req,res,{
        target:server1
    });
});

app.all('/dfsTree*',(req,res)=>{
    apiProxy.web(req,res,{
        target:server2
    });
});

app.all('/bfsTree*',(req,res)=>{
    apiProxy.web(req,res,{
        target:server2
    });
});
app.all('/bSearch*',(req,res)=>{
    apiProxy.web(req,res,{
        target:server2
    });
});

app.listen(port,()=> console.log(`Gateway on port ${port}!`))