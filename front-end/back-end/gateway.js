const express = require('express');
const httpProxy = require('http-proxy');
const app = express();
const port = process.env.PORT || 3000;

const apiProxy = httpProxy.createProxyServer();
// servers
const server1 = "http://localhost:3001";
const server2 = "http://localhost:3002";
const server3 = "http://localhost:3003";
const reactapp = 'http://localhost:3004';

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

app.all('/mSort*',(req,res)=>{
    apiProxy.web(req,res,{
        target:server2
    })
})

app.all('/qSort*',(req,res)=>{
    apiProxy.web(req,res,{
        target:server2
    })
})
app.all('/list*',(req,res)=>{
    apiProxy.web(req,res,{
        target:server3
    })
})
app.all('*',(req,res)=>{
    apiProxy.web(req,res,{
        target:reactapp,
    })
})
app.listen(port,()=> console.log(`Gateway on port ${port}!`))