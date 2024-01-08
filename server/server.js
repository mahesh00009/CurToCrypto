
const express = require('express');
const cors = require('cors')
const router = require('./Routes');
require('dotenv').config();

const app = express()

const PORT = process.env.PORT || 3000; 
const HOST = process.env.HOST


app.use(express.json())

app.use(cors({
    origin:["https://currencytocrypto.vercel.app", "*", "https://vercel.com/mahesh-dhungels-projects/currencytocrypto/6CR1i9esgh5iYkPxgsW466Fcnfux"], 
    methods : ['POST', 'GET'],
    credentials: true
  }));
  

app.use('/', router)


app.listen(PORT, HOST, () => {
    console.log(`server is running on http://${HOST}:${PORT}`)
})
