import { BACKEND_URL } from "@repo/common/config"
import express from "express"

const app=express()

console.log(BACKEND_URL)

app.get("/",(req,res)=>{
    res.json({
        message:"hello n node js app"

    })
})

app.listen(3000)