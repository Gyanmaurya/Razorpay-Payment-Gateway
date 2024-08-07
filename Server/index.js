const express = require('express');
const cors = require('cors');
const Payment = require('./Routers/Payment');
const app = express();
app.use(express.json())
app.use(cors());


app.use('/api/v1', Payment)
app.use('/',(req,res)=>{
    res.send('Home page')
 })



module.exports = app;