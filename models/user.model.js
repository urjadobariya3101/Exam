const mongoose = require('mongoose');

const userSchema = new mongoose.Schema (
    {
        firstname : {
            type : String,
            trim : true
        },
        lastname : {
            type : String,
            trim : true
        },
        email : {
            type : String,
            trim : true
        },
        password : {
            type : String,
            trim : true,
        },
        is_active : {
            type : Boolean,
            default : true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
);

const User = mongoose.model('user',userSchema);

module.exports = User;