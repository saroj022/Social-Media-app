const jwt = require('jsonwebtoken');


const authenticate=(req,res,next)=>{
    const token=req.headers.authenticate
    if(token){
        const decoded = jwt.verify(token, 'socialmedia');
        if(decoded){
            next()
        }else{
            res.send("Login First")
        }
    }else{
        res.send("Login First")
    }
}

module.exports={
    authenticate
}

