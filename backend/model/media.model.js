const mongoose = require ('mongoose');

const mediaSchema = new mongoose.Schema ({
    images:{
        type:[],
        
    },
    videos:{
        type:[],
      
    },
})

module.exports= User = mongoose.model('media', mediaSchema)

