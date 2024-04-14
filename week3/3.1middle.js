const express=require("express");
const zod=require("zod")
const app=express();


app.use(express.json());
const schema =zod.array(zod.number())


app.post("/kidney-checkup",function(req,res){
const kidneys=req.body.kidneys;
const response=schema.safeParse(kidneys)
res.send({response
})
});

app.use(function(err,req,res,next){
res.json({
    msg:"somethng is wrong"
})
})

app.listen(3000);