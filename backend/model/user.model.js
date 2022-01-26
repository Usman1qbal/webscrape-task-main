const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema ({
    email:{
        type:String,
        require: true,
        unique:true
    },
    password:{
        type:String,
        require: true
    },
})

module.exports= User = mongoose.model('user', userSchema)

