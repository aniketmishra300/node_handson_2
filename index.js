const express = require('express')
const app = express()
const route = require('./route')

app.use('/page',route)

app.listen(5000,()=>{
    console.log("Server is running Fine");
})