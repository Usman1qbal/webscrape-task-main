const bcrypt = require("bcryptjs");
const jwt = require ("jsonwebtoken")
const User = require('../model/user.model')
const config = require ('config');
const { body,validationResult} = require('express-validator')

const validateData = (method) => {
    switch (method) {
      case 'signupUser': {
        return [ 
            body('email', 'Please include a valid email').isEmail(),
            body('password', 'Please enter password with 6 or more character').isLength({min:6}),
        
        ]   
      }
  
      case 'loginUser': {
          return [ 
             body('email', 'Invalid email').isEmail(),
             body('password', "Password is required").exists()
            ]   
         }
    }
  }


const loginUser = async (req,res,next)=>{
    try{
        console.log(req.body)
        const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions
        console.log(errors)
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return
        }

        const {email, password}=req.body;
        let user = await User.findOne({email});
        console.log("user", user);
        if(!user){
            
            res.status(422).json({errors : [{msg:"Invalid credentials"}]})
            return
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json ({errors : [{msg:"Invalid credentials"}]})
        }

        const payload = {
            user:{
              id: user.id
            }
        }
        jwt.sign(payload, config.get("jwtsecret"), {expiresIn: 360000}, 
        (err, token)=>{
            if(err) throw err;
            res.json({token})
        }
        )
    }
    catch (err){
        console.log(err)
        res.status(500).json("Server Error")
    }
}


//route POST api/user
//@desc Register user


const signupUser = async (req,res) =>{
    try{
        const errors =  validationResult(req);
        console.log(errors)
        if (!errors.isEmpty()){
            res.status(400).json({errors: errors.array()});
            return
        }
        // if user exist 
        const {email,password}=req.body
        let user = await User.findOne({email});
        if (user){
           return res.status(400).json({ errors: [{msg: "email is already register"}]})
        }

 

        user = new User ({
            email,
            password,
        
        })

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);
        
        await user.save();
        const payload = {
            user:{
              id: user.id
            }
        }
        jwt.sign(payload, config.get("jwtsecret"), {expiresIn: 360000}, 
        (err, token)=>{
            if(err) throw err;
            res.json({token})
        }
        )

    }
    catch(err){
        console.log(err)
        res.status(500).json("Server Error")
    }
}

module.exports = {
    validateData,
    loginUser,
    signupUser,
}