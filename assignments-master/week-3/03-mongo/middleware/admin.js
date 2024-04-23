const {Admin}=require("../db")

// Middleware forconst handling auth
function adminMiddleware(req, res, next) {
    const username=req.headers.username;
    const password=req.headers.password

    Admin.findOne({
        username:username,
        password:password
    })
    .then(function(value){
        if(value){
            next()
        }else{
            res.status(403).json({
                msg:"user doesn't exist"
            })
        }
    })


    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;