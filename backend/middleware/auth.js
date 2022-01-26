const jwt = require ("jsonwebtoken");
const config= require ("config");



module.exports = (req, res, next) => {
    const token = req.header('x-auth-token')

    if (!token){
        return res.status(401).json ({ errors: [{msg: "email is already register"}]})
    }

    try{
        
        const decode = jwt.verify(token , config.get("jwtsecret"));
        req.user = decode.user;
        next()
    }
    catch (err){
        res.status(401).json({msg:"not valid"})
    }
}