const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

const userSchema = mongoose.Schema({
    username : String,
    name:String,
    age:Number,
    email:String,
    password:String,
    profilepic: {
        type:String,
        default:"default.png"
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    }]
    
})

module.exports = mongoose.model('user',userSchema);