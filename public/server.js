const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemon  = require('nodemon');

app.send('/', (res, req) => {
    res.send("from the root route")
})

app.send('/about', (res, req) => {
    res.send("from about page")
})

app.send('/home', (req, res) => {
    res.send('from home page')
})

app.send('/menu', (req, res) => {
    res.send('from menu page')
})

app.send('/contactus', (res, req) => {
    res.send('from the contact us page')
})

app.listen('3000', () => {
    console.log('server is liestening on port 3000');
})