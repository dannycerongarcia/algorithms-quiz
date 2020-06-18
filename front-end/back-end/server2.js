const express = require('express');
const app = express();
const axios = require('axios');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());

// importing the dfs class
const SearchTree = require('./SearchTree');


const port = 3002;
app.get('/',(req,res)=> res.send("hello from server 2"));
app.post('/dfsTree',(req,res)=>{
    
    if(req.body.array){
        const lvl2_1LeftChild = new SearchTree(req.body.array[0])
        const lvl2_1RightChild = new SearchTree(req.body.array[2])
        const lvl1_1LeftChild = new SearchTree(req.body.array[1],lvl2_1LeftChild,lvl2_1RightChild)

        const lvl2_2LeftChild = new SearchTree(req.body.array[4])
        const lvl1_2RighttChild = new SearchTree(req.body.array[5],lvl2_2LeftChild)

        const rootNode = new SearchTree(req.body.array[3],lvl1_1LeftChild,lvl1_2RighttChild)
        SearchTree.DFS(rootNode,rootNode.arr);
        
        if(rootNode.arr[3]===req.body.answer){
            const bdy = {
                'username':req.cookies.username,
                'password':req.cookies.password,
                'score':2
            }
            axios.post('htts://localhost:3001/score', bdy)
            .then((res) => {
                console.log(res);
              })
              .catch(console.log)//end of axios call
            return res.send(true);
        }
        res.send(false);
    }
    
});

app.post('/bfsTree',(req,res)=>{
    this.arr = [];
    if(req.body.array){
        console.log(req.body)
        
        SearchTree.BFS(this.arr,req.body.array,req.body.array["root"])
        
        if(this.arr[req.body.visited]===req.body.answer){
            const bdy = {
                'username':req.cookies.username,
                'password':req.cookies.password,
                'score':5
            }
            axios.post('htts://localhost:3001/score', bdy)
            .then((res) => {
                console.log(res);
              })
              .catch(console.log)//end of axios call

            return res.send(true);
        }
        console.log(this.arr)
        res.send(false);
    }
    
});

app.listen(port,()=> console.log(`server 2 listening on port ${port}`));