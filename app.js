const { json } = require('body-parser');
const express = require('express');
const app = express();
const request= require('request')
const port = 3000;

const url= 'http://www.omdbapi.com/?apikey=c6972b66&s=';
app.set("view engine", "ejs");

app.get('/', (r,s)=>{
    s.render("index");
})

app.get('/results', (req, res)=>{
    var search =req.query.search;
    request(url + search,(error, response, body)=>{
        console.error('error', error);
        console.log('response', response&&response.statuscode);    
        parsedData = JSON.parse(body);
        res.render("results", {data : parsedData})
    })
});

app.listen(port, ()=>{});