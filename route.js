const express = require('express')
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("Home Page")
})

router.get("/bollywood",(req,res)=>{
    res.send("Bollywood Page")
})

router.get("/hollywood",(req,res)=>{
    res.send("Hollywood Page")
})

module.exports = router