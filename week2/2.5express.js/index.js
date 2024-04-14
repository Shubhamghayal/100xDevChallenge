const express=require("express")
const app=express();


const users=[{
    name:"jhon",
    kidneys:[{
        healthy:false
    }]
}];

app.use(express.json())
app.get('/',function(req,res){
    const jhonKidneys=users[0].kidneys;
    const numberOfKidneys=jhonKidneys.length;
    let numberOfhealthyKidneys=0;
    for(let i=0;i<numberOfKidneys;i++){
        if(jhonKidneys[i].healthy){
            numberOfKidneys=numberOfhealthyKidneys+1
        }
    }
    const numberOfunhealthyKidneys=numberOfKidneys-numberOfhealthyKidneys
    res.json({
        numberOfKidneys,
        numberOfhealthyKidneys,
        numberOfunhealthyKidneys
    })
 })
 app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"done"
    })
 })
 app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true
    }
    res.json({
        msg:"done"
    })
    
 })

 app.delete("/",function(req,res){
    const newkidneys=[]
    for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
            newkidneys.push()
        }
        users[0].kidneys=newkidneys
    }res.json({
        msg:"delete complete"
    })
 })
 app.listen(3000)


