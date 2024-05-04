const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const{User}=require("../db")
const jwt=require("jsonwebtoken")
const{JWT_SECRET}=require("../config")

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username=req.body.username
    const password=req.body.password
    await User.create({
        username,
        password
    })

});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username
    const password=req.body.password
    const user= await User.find({
        username,password
    })

    if(user){
        const token=jwt.sign({username
        },JWT_SECRET)
        res.json({token})
    }else{
        res.status(411).json({msg:"invalid Admin"})
    }
    
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const username = req.username;
    console.log(username);

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router