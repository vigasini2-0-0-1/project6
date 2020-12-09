const express = require('express'),
    app = express()
    bodyparser= require ('body-parser');
app.use(express.static('public'));

app.use(bodyparser.urlencoded({express:false}))
app.post('/details',(req,res)=>{
    res.send(req.body.email+" - "+req.body.pwd)
})
app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");



})
app.get("/signin",(req,res)=>{
    res.sendFile(__dirname+"/signin.html");
})
app.get('/details',(req,res)=>{
    res.send(req.query.email +" - " + req.query.pwd)
})

app.listen(3000,()=>{
    console.log("App started");
})
