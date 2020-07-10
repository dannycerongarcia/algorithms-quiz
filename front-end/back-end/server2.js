const express = require('express');
const app = express();
const axios = require('axios');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());

// importing the dfs class
const SearchTree = require('./SearchTree');
const binarySearch = require('./binarySearch');

const server1 = 'htts://localhost:3001/score';
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
            axios.post(server1, bdy)
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
            axios.post(server1, bdy)
            .then((res) => {
                console.log(res);
              })
              .catch(console.log)//end of axios call
            return res.send(true);
        }
        return res.send(false);
    }
});

app.post('/bSearch',(req,res)=>{
    this.location = 0;
    console.log(req.body)
    this.n=0;
    if(true){
        this.n = binarySearch.bSearch(this.n,req.body.array,
                                       this.location,
                                       req.body.key);
        console.log(this.n)
        console.log(req.body.answer)
        if(this.n === Number(req.body.answer)){
            // send score request to server 1
            const bddy = {
                'username':req.cookies.username,
                'password':req.cookies.password,
                'score':7
            }
            axios.post(server1,bddy)
            .then((res)=>{
                console.log(res);
            })
            .catch(console.log) 
            return res.send(true);
        }
        return res.send(false);
    }
});
app.post('/mSort*',(req,res)=>
{
    let answer1 = false;
    let answer2 = false;
    let answer3 = false;
    if(req.body.qone === 2)
    {
        answer1 = true;
        const bddy = {
            'username':req.cookies.username,
            'password':req.cookies.password,
            'score':1
        }
        axios.post(server1,bddy)
        .then((res)=>{
            console.log(res);
        })
        .catch(console.log)
    }
    if(req.body.qtwo === 2)
    {
        answer2 = true;
        const bddy = {
            'username':req.cookies.username,
            'password':req.cookies.password,
            'score':1
        }
        axios.post(server1,bddy)
        .then((res)=>{
            console.log(res);
        })
        .catch(console.log) 
        
    }
    if(req.body.qthree === 2)
    {
        answer3 = true;
        const bddy = {
            'username':req.cookies.username,
            'password':req.cookies.password,
            'score':1
        }
        axios.post(server1,bddy)
        .then((res)=>{
            console.log(res);
        })
        .catch(console.log)
    }
    {
        res.send({
            answer1:answer1,
            answer2:answer2,
            answer3:answer3,
        })
    }
    
})
app.post('/qSort*',(req,res)=>
{
    let answer1 = false;
    let answer2 = false;
    let answer3 = false;
    if(req.body.qone === 2)
    {
        answer1 = true;
        const bddy = {
            'username':req.cookies.username,
            'password':req.cookies.password,
            'score':1
        }
        axios.post(server1,bddy)
        .then((res)=>{
            console.log(res);
        })
        .catch(console.log)
    }
    if(req.body.qtwo === 2)
    {
        answer2 = true;
        const bddy = {
            'username':req.cookies.username,
            'password':req.cookies.password,
            'score':1
        }
        axios.post(server1,bddy)
        .then((res)=>{
            console.log(res);
        })
        .catch(console.log) 
        
    }
    if(req.body.qthree === 3)
    {
        answer3 = true;
        const bddy = {
            'username':req.cookies.username,
            'password':req.cookies.password,
            'score':1
        }
        axios.post(server1,bddy)
        .then((res)=>{
            console.log(res);
        })
        .catch(console.log)
    }
    {
        res.send({
            answer1:answer1,
            answer2:answer2,
            answer3:answer3,
        })
    }   
})


app.listen(port,()=> console.log(`server 2 listening on port ${port}`));