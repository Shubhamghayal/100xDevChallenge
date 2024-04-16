const express=require("express")
const app=express()

function isOldEnoughMiddlewear(req,res,next){
    const age=req.query.age
    if (age>=18){
        next()
    }else{
           res.json("NO ENTRY")
        }
    }
// app.use(isOldEnoughMiddlewear);

app.get("/ride2",isOldEnoughMiddlewear,function(req,res){
        res.json("welcome for ride")
    
    })

    app.get("/ride1",isOldEnoughMiddlewear,function(req,res){
        res.json("welcome for ride")
    
    })

    app.listen(3000)